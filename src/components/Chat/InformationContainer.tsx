import { ReactNode } from "react";

interface InformationContainerProps {
  title: string;
  icon: ReactNode;
  texts: string[];
}

export const InformationContainer = ({
  title,
  icon,
  texts,
}: InformationContainerProps) => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-2 mt-32 mb-4">
        {icon}
        <h1 className="ml-2 font-bold text-center">{title}</h1>
      </div>
        {texts.map((text, index) => (
      <div className="bg-gray-100 p-4 rounded-lg w-full mb-2 text-left">
          <span key={index}>{text}</span>
      </div>
        ))}
    </div>
  );
};
