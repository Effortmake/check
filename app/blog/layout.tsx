import React from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen  bg-blue-300">
      <div className="flex w-1/2 h-full">
        <div className="flex-1 bg-red-400 ">{children}</div>
      </div>
    </div>
  );
};

export default BlogLayout;
