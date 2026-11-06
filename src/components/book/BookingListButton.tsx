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
          ? "linear-gradient(to left, #FFFFFF, #D4D4D4)"
          : "none",
        border: isHovered ? "none" : "0.5px solid #FFFFFF",
        color: isHovered ? "#19181E" : "#FFFFFF",
        fontWeight: 700,
        lineHeight: 1,
        boxShadow: isHovered
          ? "0 4px 30px rgba(255, 255, 255, 0.4), 0 5px 0 rgba(115, 115, 115, 1)"
          : "0 0 12px rgba(255, 255, 255, 0.5)",
      }}
    >
      {children}
    </button>
  );
}
