import { useState } from "react";

interface BookingListButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function BookingListButton({
  onClick,
  className = "",
  children = "BOOK NOW",
}: BookingListButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative cursor-pointer flex items-center justify-center px-8 md:px-12 py-3 md:py-4 text-[14px] md:text-[20px] rounded-md transition-all duration-300 font-inter font-bold ${className}`}
      style={{
        backgroundColor: isHovered ? "transparent" : "#1A1A1A",
        backgroundImage: isHovered
          ? "linear-gradient(to left, #333333, #111111)"
          : "none",
        border: isHovered ? "none" : "0.5px solid #111111",
        color: "#FFFFFF",
        fontWeight: 700,
        lineHeight: 1,
        boxShadow: isHovered
          ? "0 4px 20px rgba(0, 0, 0, 0.2), 0 5px 0 rgba(60, 60, 60, 1)"
          : "0 0 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      {children}
    </button>
  );
}
