import React, { useEffect, useRef, useState } from "react";

const DISTANCE_THRESHOLD = 80; // Distance in pixels for box visibility

const getBoxCenter = (
  rect: DOMRect, // Bounding rectangle of the grid container
  index: number, // Index of the box in the grid
  columns: number, // Number of columns in the grid
  boxSize: number // Size of each box
): { x: number; y: number } => {
  const col = index % columns; // Calculate column based on index
  const row = Math.floor(index / columns); // Calculate row based on index
  return {
    // Center coordinates of the box
    x: rect.left + col * boxSize + boxSize / 2,
    y: rect.top + row * boxSize + boxSize / 2,
  };
};
// Define the props for the PixelGrid component
type PixelGridProps = {
  width?: number;
  height?: number;
  boxSize?: number; 
};

export const PixelGrid: React.FC<PixelGridProps> = ({
  width = 1305, // deafault width
  height = 520, // default height
  boxSize = 50,  // default box size
}) => {
  const sectionRef = useRef<HTMLDivElement>(null); // Ref for the grid container
  const [mousePresent, setMousePresent] = useState(false); // Track if mouse is over the grid
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>( // Mouse position state
    null
  );
  // Calculate number of columns and rows based on width, height, and box size
  const columns = Math.floor(width / boxSize);
  const rows = Math.floor(height / boxSize);
  const gridSize = columns * rows;

  // Effect to handle mouse movement and update mouse position
  useEffect(() => {
    if (!mousePresent) return;
    const handleMouseMove = (e: MouseEvent) => 
      setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mousePresent]);
  // Function to determine the style of each box based on mouse proximity
  const getBoxStyle = (i: number): React.CSSProperties => {
    if (!mousePresent || !mousePos || !sectionRef.current) {
      return {
        opacity: 0,
        transform: "scale(1)",
        pointerEvents: "none",
      };
    }
    const rect = sectionRef.current.getBoundingClientRect();
    const { x, y } = getBoxCenter(rect, i, columns, boxSize);
    // Calculate distance from mouse to box center
    const dx = x - mousePos.x;
    const dy = y - mousePos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    // Determine visibility and scale based on distance
    const visible = distance < DISTANCE_THRESHOLD;
    const scale = Math.max(1 - distance / 500, 0.5);

    return {
      opacity: visible ? 1 : 0,
      transform: `scale(${scale})`,
      pointerEvents: "none",
    };
  };

  return (
    <div className="mt-30">
        {/* Grid container */}
      <div
        ref={sectionRef}
        className="flex flex-wrap"
        style={{ width: `${width}px`, height: `${height}px` }}
        onMouseEnter={() => setMousePresent(true)}
        onMouseLeave={() => {
          setMousePresent(false);
          setMousePos(null);
        }}
      >
        {/* Render all the boxes */}
        {Array.from({ length: gridSize }).map((_, i) => (
          <div
            key={i}
            className="relative bg-[#ef4444] shadow-[0_0_25px_rgba(255,0,0,1)] transition-all duration-100"
            style={{
              width: `${boxSize}px`,
              height: `${boxSize}px`,
              ...getBoxStyle(i),
            }}
          />
        ))}
        {/* Content within the Box Pixel */}
        <div className="relative top-[-500px] left-[450px] w-100 h-60 px-4 rounded-[20px] border border-white/20 shadow-lg bg-white/10 backdrop-blur-md " >
            <div className="  w-full flex flex-row gap-2 justify-between items-center p-2 border-b-2 ">
                <ul className="flex flex-row gap-2 my-2">
                    <li className="rounded-full h-5 w-5 bg-green-600 cursor-pointer"></li>
                    <li className="rounded-full h-5 w-5 bg-yellow-600"></li>
                    <li className="rounded-full h-5 w-5 bg-red-600"></li>
                </ul>
                <p className="font-mono">Motivation.txt</p>
            </div>
            <div className="items-center text-center justify-center font-mono ">
                <div className="font-bold text-lg mt-4 mb-1 border-b-2 border-cus-grey">
                    <p>"Every error is an opportunity to</p>
                </div>
                <div className="font-bold text-lg mb-1 border-b-2 border-cus-grey">
                    <p> learn. Don't be afraid to make</p>
                </div>
                <div className="font-bold text-lg mb-1 border-b-2 border-cus-grey">
                    <p>mistakes, they're part of the</p>
                </div>
                <div className="font-bold text-lg mb-1 border-b-2 border-cus-grey">
                    <p>coding process."</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PixelGrid;
