import { parseMarkdown } from './parse-markdown';

const DOCS_PATH = 'content/docs';

async function getDocsPage(name) {
  const file = `${DOCS_PATH}/${name}.md`;
  return await parseMarkdown(file);
}

export { getDocsPage };
