"use client";

import { Ellipsis, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

export const description = "A multiple line chart";

const chartData = [
  { month: "January", income: 186, expanses: 80 },
  { month: "February", income: 305, expanses: 200 },
  { month: "March", income: 237, expanses: 120 },
  { month: "April", income: 73, expanses: 190 },
  { month: "May", income: 209, expanses: 130 },
  { month: "June", income: 214, expanses: 140 },
];

const chartConfig = {
  income: {
    label: "income",
    color: "hsl(var(--chart-1))",
  },
  expanses: {
    label: "expanses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function FinanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Finances</CardTitle>
        <CardDescription>
          <Ellipsis className="h-4 w-4 cursor-pointer" />
        </CardDescription>
      </CardHeader>
      <CardContent className="h-full">
        <ChartContainer
          className="aspect-auto h-[250px] w-full"
          config={chartConfig}
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="income"
              type="monotone"
              stroke="var(--color-income)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="expanses"
              type="monotone"
              stroke="var(--color-expanses)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
