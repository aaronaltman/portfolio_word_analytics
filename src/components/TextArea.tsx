"use client";

export default function TextArea({ text, handleTextChange }: any) {
  return (
    <textarea
      className="bg-slate-200 h-[25rem] min-w-[10rem] w-full p-4 rounded-lg text-lg"
      placeholder="Enter Your Text Here..."
      maxLength={5000}
      onChange={handleTextChange}
      spellCheck={false}
      value={text}
    />
  );
}
