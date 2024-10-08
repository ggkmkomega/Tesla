"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { CalendarIcon } from "lucide-react";

const scheduleData = [
  {
    time: "08:00 AM",
    monday: "Mathematics",
    tuesday: "Physics",
    wednesday: "Chemistry",
    thursday: "Biology",
    friday: "Computer Science",
  },
  {
    time: "09:00 AM",
    monday: "English Literature",
    tuesday: "History",
    wednesday: "Geography",
    thursday: "Art",
    friday: "Music",
  },
  {
    time: "10:00 AM",
    monday: "Physics",
    tuesday: "Mathematics",
    wednesday: "English Literature",
    thursday: "Computer Science",
    friday: "Physical Education",
  },
  {
    time: "11:00 AM",
    monday: "History",
    tuesday: "Chemistry",
    wednesday: "Physics",
    thursday: "Mathematics",
    friday: "English Literature",
  },
  {
    time: "12:00 PM",
    monday: "Lunch Break",
    tuesday: "Lunch Break",
    wednesday: "Lunch Break",
    thursday: "Lunch Break",
    friday: "Lunch Break",
  },
  {
    time: "01:00 PM",
    monday: "Computer Science",
    tuesday: "English Literature",
    wednesday: "Mathematics",
    thursday: "Physics",
    friday: "History",
  },
  {
    time: "02:00 PM",
    monday: "Physical Education",
    tuesday: "Art",
    wednesday: "Music",
    thursday: "Geography",
    friday: "Chemistry",
  },
  {
    time: "03:00 PM",
    monday: "Chemistry",
    tuesday: "Biology",
    wednesday: "Computer Science",
    thursday: "English Literature",
    friday: "Mathematics",
  },
  {
    time: "04:00 PM",
    monday: "Art",
    tuesday: "Music",
    wednesday: "Physical Education",
    thursday: "History",
    friday: "Physics",
  },
];

export default function Schedule() {
  const [viewType, setViewType] = useState<"daily" | "weekly">("daily");
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentDay = currentDate
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();

  const dailySchedule = scheduleData.map((item) => ({
    time: item.time,
    course: item[currentDay as keyof typeof item] || "No Class",
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5" />
            <CardTitle className="text-2xl font-bold">
              Student Daily Schedule
            </CardTitle>
          </div>
          <div className="space-x-2">
            <Button
              variant={viewType === "daily" ? "default" : "secondary"}
              onClick={() => setViewType("daily")}
            >
              Daily View
            </Button>
            <Button
              variant={viewType === "weekly" ? "default" : "secondary"}
              onClick={() => setViewType("weekly")}
            >
              Work Week
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{formattedDate}</p>
      </CardHeader>
      <CardContent className="p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Time</TableHead>
              {viewType === "weekly" ? (
                <>
                  <TableHead className="p-4">Monday</TableHead>
                  <TableHead>Tuesday</TableHead>
                  <TableHead>Wednesday</TableHead>
                  <TableHead>Thursday</TableHead>
                  <TableHead>Friday</TableHead>
                </>
              ) : (
                <TableHead className="p-4">Course</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {viewType === "weekly"
              ? scheduleData.map((item) => (
                  <TableRow key={item.time}>
                    <TableCell className="font-medium">{item.time}</TableCell>
                    <TableCell className="p-4">
                      <span
                        className={
                          item.monday === "Lunch Break"
                            ? "italic text-muted-foreground"
                            : ""
                        }
                      >
                        {item.monday}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={
                          item.tuesday === "Lunch Break"
                            ? "italic text-muted-foreground"
                            : ""
                        }
                      >
                        {item.tuesday}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={
                          item.wednesday === "Lunch Break"
                            ? "italic text-muted-foreground"
                            : ""
                        }
                      >
                        {item.wednesday}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={
                          item.thursday === "Lunch Break"
                            ? "italic text-muted-foreground"
                            : ""
                        }
                      >
                        {item.thursday}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={
                          item.friday === "Lunch Break"
                            ? "italic text-muted-foreground"
                            : ""
                        }
                      >
                        {item.friday}
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              : dailySchedule.map((item) => (
                  <TableRow key={item.time}>
                    <TableCell className="font-medium">{item.time}</TableCell>
                    <TableCell className="p-4">
                      <span
                        className={
                          item.course === "Lunch Break"
                            ? "italic text-muted-foreground"
                            : ""
                        }
                      >
                        {item.course}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
