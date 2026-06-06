import { useRef, useState } from "react";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
}

export function Tilt3D({ children, className = "" }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientY - centerY) / (rect.height / 2);
    const y = (e.clientX - centerX) / (rect.width / 2);

    setRotation({
      x: Math.min(Math.max(x * -8, -15), 15),
      y: Math.min(Math.max(y * 8, -15), 15),
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
