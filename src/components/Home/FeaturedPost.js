import { sortBlogs } from "@/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const FeaturedPost = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold text-black capitalize text-4xl">
        Featured
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutOne blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutThree blog={sortedBlogs[4]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPost;
