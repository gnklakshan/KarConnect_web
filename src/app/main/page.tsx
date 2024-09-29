import Karconnect from "@/components/Dashboard/Karconnect";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import useAuth from "../../hooks/useAuth";
// import { AuthContextProvider } from "../../hooks/AuthContext";

export const metadata: Metadata = {
  title: "KarConnect",
  description: "Simplify your rent experience with KarConnect",
};

export default function Home() {
  // useAuth();
  return (
    <>
      <DefaultLayout>
        <Karconnect />
      </DefaultLayout>
    </>
  );
}
