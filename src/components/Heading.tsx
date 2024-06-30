type HeadingProps={
    text:string;
}
export default function Heading({text}:HeadingProps) {
  return (
    <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">
      {text}
    </h1>
  );
}
