import ChatCard from "@/components/Chat/ChatCard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

export const metadata: Metadata = {
  title: "Massage | KarConnect",
  description:
    "Massage ",
};

const massageViwer: React.FC = () => {
  return (
    <DefaultLayout>
      <ChatCard />
    </DefaultLayout>
  );
};

export default massageViwer;
