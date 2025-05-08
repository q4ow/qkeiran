import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <div className="text-foreground bg-background flex justify-center items-center">
        <h1 className="text-4xl">qkeiran</h1>
      </div>
    </>
  );
}
