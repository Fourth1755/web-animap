import React from "react";

type ButtonProps = {
  name: string;
  color: "pink" | "blue" | "gray" | "white";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  width?: string
};

const colorStyles = {
  pink: "bg-[#FF1493] hover:bg-pink-600 text-white",
  blue: "bg-blue-500 hover:bg-blue-600 text-white",
  gray: "bg-gray-500 hover:bg-gray-600 text-white",
  white: "bg-white hover:bg-gray-600 text-black",
};

export default function Button({
  name,
  color,
  onClick,
  type = "button",
  width = "w-36",
}: ButtonProps) {
  const style = colorStyles[color] || colorStyles.pink;

  return (
    <button
      type={type}
      className={`rounded-2xl px-3 py-2 text-sm font-semibold ${width} ${style}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
