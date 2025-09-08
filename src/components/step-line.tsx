import { useEffect, useRef } from "react";

export default function StepLine() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const length = path.getTotalLength();

    path.style.strokeDasharray = length.toString();
    path.style.strokeDashoffset = length.toString();

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max(((windowHeight - rect.top) / (rect.height + windowHeight )) * 1, 0),
        1
      );

      path.style.strokeDashoffset = `${length - progress * length}`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div  ref={containerRef} className=" flex absolute items-center justify-end  z-[-1] left-170 ">
      <svg
        className="w-[600px] h-[500px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 400"
        fill="none"
      >
        <path
            className="drop-shadow-[0_0_25px_#ef4444]"
            ref={pathRef}
            d="M50 60 H200 V190 H350 V330 H500"
            stroke="red"
            strokeWidth="4"
            fill="none"
        />
      </svg>
    </div>
  );
}
