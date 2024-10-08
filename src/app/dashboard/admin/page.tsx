import React from "react";
import Anouncements from "~/app/_components/Anouncements";
import { AttendenceChart } from "~/app/_components/AttendenceChart";
import { Chart } from "~/app/_components/CountChart";
import { EventCalendar } from "~/app/_components/EventCalander";
import { FinanceChart } from "~/app/_components/FinanceChart";
import UserCard from "~/app/_components/user-card";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-8 p-4 md:flex-row">
      <div className="flex w-full flex-col gap-8 lg:w-2/3">
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staff" />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="h-[450px] w-full lg:w-1/3">
            <Chart />
          </div>
          <div className="h-[450px] w-full lg:w-2/3">
            <AttendenceChart />
          </div>
        </div>
        <div className="h-[500px] w-full">
          <FinanceChart />
        </div>
      </div>
      <div className="flex w-full flex-col gap-8 lg:w-1/3">
        <EventCalendar />
        <Anouncements />
      </div>
    </div>
  );
};

export default AdminPage;
