import React from "react";
import MainCard from "./MainCard";

export default function Background() {
  return (
    <main className="bg-slate-500 h-screen">
      <section className="bg-slate-200 py-20  max-w-8xl mx-auto ">
        <h1 className="text-center text-6xl">Word Analytics</h1>
      </section>
      <MainCard />
    </main>
  );
}
