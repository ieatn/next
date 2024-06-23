// the main page for posts

import Link from "next/link";
import Image from "next/image";

// create a [id] folder and only 1 page template for each individual post
export default function PostsPage() {
    return (
      <div>
        <Link href="/">go back home</Link>
        <h1>posts page</h1>
        <Link href="/posts/1">post 1</Link>
        <Link href="/posts/2">Post 2</Link>
        <Link href="/posts/3">Post 3</Link>
        {/* alt, width, height props are required */}
        <Image
          alt="The guitarist in the concert."
          src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
          width={2250}
          height={1390}
        />
      </div>
    );
  }
  