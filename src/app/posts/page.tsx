// the main page for posts

import Link from "next/link";

// create a [id] folder and only 1 page template for each individual post
export default function PostsPage() {
    return (
      <div>
        <Link href="/">go back home</Link>
        <h1>posts page</h1>
        <Link href="/posts/1">post</Link>
        <Link href="/posts/2">Post 2</Link>
        <Link href="/posts/3">Post 3</Link>
      </div>
    );
  }
  