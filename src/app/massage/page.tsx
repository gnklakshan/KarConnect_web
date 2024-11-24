import ChatCard from "@/components/Chat/ChatCard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Message | KarConnect",
  description:
    "Message ",
};

const massageViwer: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Message" />
      <ChatCard />
    </DefaultLayout>
  );
};

export default massageViwer;
