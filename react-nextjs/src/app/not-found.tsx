import Link from "next/link";

/*
The not-found file is used to render UI when the notFound 
function is thrown within a route segment. 
Along with serving a custom UI, Next.js will 
also return a 404 HTTP status code.
*/

export default function NotFound(): JSX.Element {
  return (
    <main className="w-full prose">
      <h2>Not Found</h2>
      <p>
        Could not find requested resource.
        <br />
        <br />
        View <Link href="/posts">all posts</Link>
      </p>
    </main>
  );
}
