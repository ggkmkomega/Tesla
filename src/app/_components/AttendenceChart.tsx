"use client";

import { Ellipsis, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "Sunday", Present: 70, Absent: 10 },
  { month: "Monday", Present: 75, Absent: 5 },
  { month: "Tuesday", Present: 73, Absent: 7 },
  { month: "Wednesday", Present: 72, Absent: 8 },
  { month: "Thursday", Present: 69, Absent: 11 },
  { month: "Friday", Present: 78, Absent: 2 },
  { month: "Saturday", Present: 77, Absent: 3 },
];

const chartConfig = {
  Present: {
    label: "Present",
    color: "hsl(var(--chart-1))",
  },
  Absent: {
    label: "Absent",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function AttendenceChart() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="pb-0">
        <CardTitle>Attendence</CardTitle>
        <CardDescription>
          <Ellipsis className="h-4 w-4 cursor-pointer" />
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer className="max-h-[300px]" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />

            <Bar dataKey="Present" fill="var(--color-Present)" radius={4} />
            <Bar dataKey="Absent" fill="var(--color-Absent)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total Attendence for the last 7 Days.
        </div>
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
