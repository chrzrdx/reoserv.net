import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import etag from '../utils/etag.server';
import { getGitFeed } from '../utils/get-git-feed.server';
import { Layout } from './_index';

export const headers = ({ loaderHeaders }) => ({
  'Cache-Control': loaderHeaders.get('Cache-Control'),
  ETag: loaderHeaders.get('ETag'),
});

export function meta() {
  return [{ title: 'Not Found | REOSERV' }];
}

export async function loader({ request }) {
  try {
    const commits = await getGitFeed(request);
    const body = JSON.stringify({ commits });
    const ETag = etag(body);

    return new Response(body, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=60, public',
        ETag,
      },
    });
  } catch (e) {
    console.error('There was an error getting the articles / commit feed', e);
    return json([]);
  }
}

export default function FourOFour() {
  const { commits } = useLoaderData();

  return (
    <Layout commits={commits}>
      <h1 className="mb-1 font-bold text-3xl">404 - Page not found</h1>
      <p>
        Click{' '}
        <Link to="/" className="text-blue-500 underline">
          here
        </Link>{' '}
        to go home.
      </p>
    </Layout>
  );
}
