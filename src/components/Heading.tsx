import { cn } from "@/lib/utils";

type HeadingProps = {
  text: string;
  className?: string;
};
export default function Heading({ text, className }: HeadingProps) {
  return (
    <h1
      className={cn("text-3xl font-bold tracking-tight lg:text-6xl", className)}
    >
      {text}
    </h1>
  );
}
