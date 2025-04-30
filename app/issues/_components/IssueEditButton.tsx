"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  issueId: string;
}

export default function IssueEditButton({ issueId }: Props) {
  return (
    <Link href={`/issues/${issueId}/edit`}>
      <Button variant="default" size="sm" className="cursor-pointer">
        Update
      </Button>
    </Link>
  );
}
