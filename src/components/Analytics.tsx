import React from "react";

export default function Analytics({ text }: { text: string }) {
  const wordCount = text.split(/\s+/).filter((word) => word !== "").length;
  const charCount = text.length;
  const faceBook = 2200 - text.length;
  return (
    <div className="flex flex-wrap justify-between gap-10 py-2 px-20">
      <p className="flex flex-col border border-black/10 w-1/2">
        {" "}
        {charCount} Chars
      </p>
      <p>{wordCount}</p>
      <p>{faceBook}</p>
      <p>Twitter</p>
    </div>
  );
}
