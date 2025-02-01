import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>the main page</h1>
      <Link href="/posts">go to posts</Link>
      <Link href="/posts/first-post">go to first post</Link>
      <Link href="/posts/second-post">go to second post</Link>

    </main>
  );
}
