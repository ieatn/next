import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>the main page</h1>
      <Link href="/posts">go to posts</Link>

    </main>
  );
}
