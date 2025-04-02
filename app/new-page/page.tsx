import React from "react";

const NewPage = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("connected");
    }, 4000)
  );

  return <div>NewPage</div>;
};

export default NewPage;
