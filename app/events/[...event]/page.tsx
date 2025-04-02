import React from "react";

const EventPage = async ({ params }: { params: { event: string[] } }) => {
  const allEvent = await params.event;
  console.log(allEvent);
  return (
    <div>
      EventPage
      <div className="">
        <ul className="flex space-x-1 ">
          {allEvent.map((eve) => (
            <li key={eve}>{eve}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventPage;
