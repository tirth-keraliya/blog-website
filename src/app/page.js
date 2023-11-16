import FeaturedPost from "@/components/Home/FeaturedPost";
import HomeCoverSection from "@/components/Home/HomeCoverSection";
import RecentPosts from "@/components/Home/RecentPost";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
