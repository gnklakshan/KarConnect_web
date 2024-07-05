import Karconnect from "@/components/Dashboard/Karconnect";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "KarConnect",
  description: "Simplify your rent experience with KarConnect",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Karconnect />
      </DefaultLayout>
    </>
  );
}

