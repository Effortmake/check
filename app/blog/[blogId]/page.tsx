import React from "react";
import BlogLayout from "../layout";

const BlogIdPage = ({ params }: { params: { blogId: string } }) => {
  return (
    <div>
      <BlogLayout>
        <div className="">
          <h2>check id</h2>
        </div>
      </BlogLayout>
    </div>
  );
};

export default BlogIdPage;
