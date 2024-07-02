export default function NotFound({ text }: { text: string }) {
  return (
    <div className="w-screen pb-20 h-screen flex justify-center items-center text-2xl mt-10">
      {text}
    </div>
  );
}
