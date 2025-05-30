"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
interface Props {
  open: number;
  inprogress: number;
  closed: number;
}
const IssueChart = ({ open, inprogress, closed }: Props) => {
  const router = useRouter();
  const data = [
    { label: "Open", value: open },
    { label: "Inprogress", value: inprogress },
    { label: "closed", value: closed },
  ];
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Issue Status Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey={"label"} />
              <YAxis />
              <Bar dataKey="value" className="cursor-pointer transition-shadow hover:shadow-md" onClick={(data) => router.push(`/issues/list?status=${data.label.toUpperCase() === 'INPROGRESS' ? 'IN_PROGRESS' : data.label.toUpperCase()}`)} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default IssueChart;
