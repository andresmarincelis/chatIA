import { ReactNode } from "react";
import { useThemeContext } from "../../context/ThemeProvider";

export interface InformationContainerProps {
  title: string;
  icon: ReactNode;
  texts: string[];
}

export const InformationContainer = ({
  title,
  icon,
  texts,
}: InformationContainerProps) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`w-1/4
      ${theme === "dark" ? "bg-red" : "bg-green"}`}>
      <div className={`flex flex-col items-center justify-center space-y-2 mb-4
      ${theme === "dark" ? "text-white" : "text-black"}`}>
        {icon}
        <h1 className="font-bold text-center text-xl">{title}</h1>
      </div>
      {texts.map((text, index) => (
        <div className={`p-4 rounded-lg w-full mb-2 text-left
        ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-100"}`}>
          <span key={index}>{text}</span>
        </div>
      ))}
    </div>
  );
};
