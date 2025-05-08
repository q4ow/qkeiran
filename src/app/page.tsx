import type { Metadata } from "next";
import { HomeClient } from "~/components/ClientPages";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <HomeClient />;
}
