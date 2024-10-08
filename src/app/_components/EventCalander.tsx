"use client";

import { Ellipsis } from "lucide-react";
import * as React from "react";

import { Calendar } from "~/components/ui/calendar";

export function EventCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full max-w-xl rounded-md border shadow"
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4 w-full",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-full font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: "relative w-full p-0 text-center",
          day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:rounded-md mx-auto flex items-center justify-center",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
        }}
      />
      <div>
        <h1 className="text-2xl font-semibold">Events</h1>
        <Ellipsis className="h-4 w-4 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-md border-2 border-t-4 border-gray-100 border-t-primary"
          >
            <div className="flex items-center justify-between pt-4">
              <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {event.title}
              </h2>
              <p className="text-muted-foreground">{event.time}</p>
            </div>
            <p className="mt-6 leading-7">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
