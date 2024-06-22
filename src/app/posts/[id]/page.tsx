
import Link from "next/link";

// i think the params is just the folder [id] which is a string? and the Links on postspage just manually creates a route so i
// dont have to do anything here, the post is auto created whenever i create new link that directs to a route
export default function Post({ params }: { params: { id: string } }) {
    return (
      <div>
        <h1>Post {params.id}</h1>
        <p>This is the content for post {params.id}.</p>
        <Link href="/posts">Back to Posts</Link>
      </div>
    );
  }
  