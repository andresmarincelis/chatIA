import { ReactNode } from "react";
import { useThemeContext } from "../../context/ThemeProvider";

export interface SideBarToolsProps {
  name: string;
  icon: ReactNode;
  onClick?: () => void;
}

export const SideBarTools = ({ name, icon, onClick }: SideBarToolsProps) => {
  const { theme } = useThemeContext();

  return (
    <button
      className={`flex justify-start items-center 
      ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
      onClick={onClick}
    >
      {icon}
      <span className="py-3 px-3 rounded-lg text-start">{name}</span>
    </button>
  );
};
