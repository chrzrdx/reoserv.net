import { redirect } from '@remix-run/node';

export async function loader({ params }) {
  throw redirect('/docs/installation');
}
