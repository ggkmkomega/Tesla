import React from "react";
import Anouncements from "~/app/_components/Anouncements";
import { EventCalendar } from "~/app/_components/EventCalander";
import Schedule from "~/app/_components/Schedule";

const StudentPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full rounded-md p-4">
          <Schedule />
        </div>
      </div>
      {/* right */}
      <div className="flex w-full flex-col gap-8 xl:w-1/3">
        <EventCalendar />
        <Anouncements />
      </div>
    </div>
  );
};

export default StudentPage;
