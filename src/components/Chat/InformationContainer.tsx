import { ReactNode } from "react";

interface InformationContainerProps {
  title: string;
  icon: ReactNode;
  text1: string;
  text2: string;
  text3: string;
}

export const InformationContainer = ({
  title,
  icon,
  text1,
  text2,
  text3,
}: InformationContainerProps) => {
  return (
    <div className="flex flex-col items-center space-y-2 mt-32">
      {icon}
      <h1 className="ml-2 font-bold text-center">{title}</h1>
      <div className="flex items-center mb-4"></div>
      <div className="bg-gray-100 p-4 rounded-lg w-full mb-2 text-center">
        <span>"{text1}"</span>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg w-full mb-2 text-center">
        <span>"{text2}"</span>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg w-full text-center">
        <span>"{text3}"</span>
      </div>
    </div>
  );
};
