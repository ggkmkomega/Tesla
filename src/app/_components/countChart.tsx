"use client";

import { Ellipsis, TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

export const description = "A radial chart";

const chartData = [
  { browser: "male", number: 550, fill: "var(--color-male)" },
  { browser: "female", number: 450, fill: "var(--color-female)" },
];

const chartConfig = {
  number: {
    label: "number",
  },
  male: {
    label: "male",
    color: "hsl(var(--chart-1))",
  },
  female: {
    label: "female",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="pb-0">
        <CardTitle>Students</CardTitle>
        <CardDescription>
          <Ellipsis className="h-4 w-4 cursor-pointer" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={70} outerRadius={130}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="number" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 text-sm">
        <div className="items-center justify-around gap-2 font-medium leading-none text-muted-foreground">
          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-1">
              <div className="h-5 w-5 rounded-full bg-primary"></div>
              <h1 className="font-bold">1,234</h1>
              <h2 className="text-sm text-muted-foreground">
                Boys &#40;55%&#41;
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-5 w-5 rounded-full bg-accent"></div>
              <h1 className="font-bold">1,174</h1>
              <h2 className="text-sm text-muted-foreground">
                Girls &#40;45%&#41;
              </h2>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
