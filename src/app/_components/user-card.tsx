"use client";

import { Ellipsis } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function UserCard({ type }: { type: string }) {
  return (
    <Card className="min-w-[130px] flex-1 p-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <Badge>2024/25</Badge>
          <Ellipsis className="h-4 w-4" />
        </div>
        <CardTitle className="my-4 text-4xl font-semibold">1,329</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm font-medium capitalize text-muted-foreground">
          {type}
        </div>
      </CardContent>
    </Card>
  );
}
