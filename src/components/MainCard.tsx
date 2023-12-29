"use client";

import React, { useState } from "react";
import TextArea from "./TextArea";
import Analytics from "./Analytics";

export default function MainCard() {
  const [text, setText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.includes("<script>")) {
      alert("Please don't try to hack me");
      setText("");
      return;
    }
    setText(newText);
  };

  return (
    <section className="flex flex-col sm:flex-row justify-center -mt-8 bg-slate-400 max-w-4xl mx-auto rounded-xl py-2 px-2">
      <TextArea text={text} handleTextChange={handleTextChange} />
      <Analytics text={text} />
    </section>
  );
}
