import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};
export default function Container({ children }: ContainerProps) {
  return <div className="min-h-screen max-w-7xl mx-auto flex flex-col">{children}</div>;
}
