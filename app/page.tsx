import { getAllPosts } from "@/lib/posts";
import { PostListItem } from "@/components/PostListItem";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-10">
      {posts.map((p) => (
        <div key={p.slug} className="pb-8 border-b last:border-b-0">
          <PostListItem post={p} />
        </div>
      ))}
    </div>
  );
}
