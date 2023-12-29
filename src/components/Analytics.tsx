export default function Analytics({ text }: { text: string }) {
  const wordCount = text.split(/\s+/).filter((word) => word !== "").length;
  const charCount = text.length;
  const faceBook = 2200 - text.length;
  const twitterCount = 280 - text.length;
  return (
    <div className="flex flex-wrap bg-slate-900 p-4 rounded-xl">
      <div className="flex-1 min-w-1/2 flex flex-col text-white justify-center items-center border border-white m-2 p-4">
        <p className="text-3xl"> {charCount} </p>
        <p className="text-center">Character Count</p>
      </div>
      <div className="flex-1 min-w-1/2 flex flex-col text-white justify-center items-center border border-white m-2 p-4">
        <p className="text-3xl"> {wordCount} </p>
        <p>Word Count</p>
      </div>
      <div className="flex-1 min-w-1/2 flex flex-col text-white justify-center items-center border border-white m-2 p-4">
        <p className="text-3xl"> {faceBook} </p>
        <p>Facebook</p>
      </div>
      <div className="flex-1 min-w-1/2 flex flex-col text-white justify-center items-center border border-white m-2 p-4">
        <p className="text-3xl"> {twitterCount} </p>
        <p>Twitter</p>
      </div>
    </div>
  );
}
