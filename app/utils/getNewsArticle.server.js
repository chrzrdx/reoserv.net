import fs from 'node:fs/promises';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import etag from './etag.server';
import getPrettyDate from './getPrettyDate.server';
import { replaceVideoTags } from './replaceVideoTags.server';
import { getClockOffset } from './getClockOffset.server';

const NEWS_PATH = 'news';

export default async function getNewsArticle(name, request) {
  const clockOffset = getClockOffset(request);
  const file = await fs.open(`${NEWS_PATH}/${name}.md`, 'r');
  const content = await file.readFile('utf-8');
  await file.close();

  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    }),
  );

  const fm = matter(content);
  const markdown = `${fm.data.description}\n${fm.content}`;
  return {
    title: fm.data.title,
    date: getPrettyDate(fm.data.date, clockOffset),
    description: fm.data.description,
    etag: etag(markdown),
    content: replaceVideoTags(marked.parse(markdown)),
  };
}
