import { BiArrowFromLeft } from "react-icons/bi";
import React from "react";
import { cn } from "@/utils/cn";

interface MainButtonProps {
  text?: string;
  icon?: React.ReactNode;
  buttonClassName?: string;
  size?: "small" | "medium" | "large"; // Add size prop
  variant?: "primary" | "secondary" | "outline" | "danger"; // Variant prop
  loading?: boolean; // Loading state
  loadingIcon?: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({
  type = "button",
  text = "MainButton",
  icon = <BiArrowFromLeft size={20} />, // default icon
  variant = "primary", // Default variant
  buttonClassName = "",
  size = "medium",
  onClick,
  loading = false, // Default loading state
  loadingIcon = (
    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
  ),
}) => {
  const iconSize = size === "small" ? 16 : size === "large" ? 24 : 20;

  const sizeStyles = {
    small: "px-2 py-1 text-sm", // Small padding and text size
    medium: "px-4 py-2 text-base", // Medium padding and text size (default)
    large: "px-6 py-3 text-lg", // Large padding and text size
  };
  const variantStyles = {
    primary:
      "bg-blue-500 text-white hover:bg-current/10 disabled:cursor-not-allowed disabled:bg-current/40 disabled:text-gray-300",
    secondary:
      "bg-gray-500 text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-300",
    outline:
      "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-100 disabled:cursor-not-allowed disabled:bg-blue-50 disabled:text-gray-300",
    danger:
      "bg-red-500 text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-red-400 disabled:text-gray-300",
  };
  return (
    <button
      type={type}
      className={cn(
        "flex items-center  justify-between gap-2 rounded-md font-medium transition duration-300  ease-in-out min-w-[6rem]",
        sizeStyles[size],
        variantStyles[variant],
        buttonClassName
      )}
      onClick={onClick}
      disabled={loading}
    >
      <>
        <span>{text}</span>
        {loading && icon
          ? loadingIcon
          : icon &&
            React.cloneElement(icon as React.ReactElement, {
              size: iconSize,
            })}
      </>
    </button>
  );
};

export default MainButton;
