import React from "react";
import IssueForm from "@/components/general/IssueForm"; 
import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const CreateIssuePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.session) {
    redirect("/signin");
  }

  return <IssueForm />;
};

export default CreateIssuePage;
