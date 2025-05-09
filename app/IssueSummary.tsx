"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  open: number;
  inprogress: number;
  closed: number;
}
const IssueSummary = ({ open, inprogress, closed }: Props) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-4">
      <Card className="w-[200px] cursor-pointer transition-shadow hover:shadow-md" onClick={() => router.push('/issues/list?status=OPEN')}>
        <CardHeader>
          <CardTitle>Open Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{open}</p>
        </CardContent>
      </Card>
      <Card className="w-[200px] cursor-pointer transition-shadow hover:shadow-md" onClick={() => router.push('/issues/list?status=IN_PROGRESS')}>
        <CardHeader>
          <CardTitle>Inprogress Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{inprogress}</p>
        </CardContent>
      </Card>
      <Card className="w-[200px] cursor-pointer transition-shadow hover:shadow-md" onClick={() => router.push('/issues/list?status=CLOSED')}>
        <CardHeader>
          <CardTitle>Closed Issue</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{closed}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default IssueSummary;
