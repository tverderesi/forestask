import React from "react";

export function Carousel({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="carousel carousel-vertical h-screen w-screen overflow-y-scroll">
      {children}
    </div>
  );
}
