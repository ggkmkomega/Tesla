import React from "react";

const Anouncements = () => {
  const anouncements = [
    {
      id: 1,
      title: "Welcome to University of Toronto",
      time: "September 7, 2022",
      description:
        "Welcome to the University of Toronto, we are excited to have you here.",
    },
    {
      id: 2,
      title: "Academic Integrity Week",
      time: "September 19-23, 2022",
      description:
        "Academic Integrity Week is a university-wide initiative to promote academic integrity and prevent academic misconduct.",
    },
    {
      id: 3,
      title: "Mental Health Awareness Week",
      time: "October 3-7, 2022",
      description:
        "Mental Health Awareness Week is a university-wide initiative to promote mental health and well-being.",
    },
  ];

  return (
    <div className="rounded-md bg-background p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Anouncements</h1>
        <span>View All</span>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {anouncements.map((anounce) => (
          <div className="rounded-md bg-blue-100 p-4" key={anounce.id}>
            <div className="flex items-center justify-between">
              <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                {anounce.title}
              </h2>
              <p className="text-muted-foreground">{anounce.time}</p>
            </div>
            <p className="mt-6 leading-7">{anounce.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anouncements;
