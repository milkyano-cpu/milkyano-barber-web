import { useState } from "react";

interface BookNowButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function BookNowButton({
  onClick,
  className = "",
  children = "BOOK NOW",
  type = "button",
}: BookNowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative cursor-pointer px-8 md:px-12 py-3 md:py-4 text-base md:text-lg rounded-xl transition-all duration-300 font-poppins ${className}`}
      style={{
        backgroundColor: isHovered ? "transparent" : "#111111",
        backgroundImage: isHovered
          ? "linear-gradient(to left, #333333, #111111)"
          : "none",
        border: "none",
        outline: isHovered ? "none" : "2px solid #111111",
        outlineOffset: "-2px",
        color: "#FFFFFF",
        fontWeight: isHovered ? 700 : 600,
        boxShadow: isHovered
          ? "0 4px 20px rgba(0, 0, 0, 0.2), 0 5px 0 rgba(60, 60, 60, 1)"
          : "0 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {children}
    </button>
  );
}
