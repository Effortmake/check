import React from "react";

interface Props {
  params: {
    userId: string;
  };
}

const UserIdPage = ({ params }: { params: { userId: string } }) => {
  console.log(params.userId);
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="p-5 mt-2 bg-gradient-to-r from-blue-300 to-indigo-200">
        UserIdPage {params.userId}
      </div>
    </div>
  );
};

export default UserIdPage;
