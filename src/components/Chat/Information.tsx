import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import { InformationContainer } from "./InformationContainer";

interface InfoOptions {
  title: string;
  icon: ReactNode;
  texts: string[];
}

const items: InfoOptions[] = [
  {
    title: "Examples",
    icon: <ChatBubbleLeftRightIcon className="size-6" />,
    texts: [
        '"Explain quantum computing in simple terms"',
        '"Got any creative ideas for a 10 year old’s birthday?"',
        '"How do I make an HTTP request in Javascript?"',
      ],
  },
];

export const Information = () => {
  return (
    <div className="flex flex-col items-center">
      {items.map((item, index) => (
        <InformationContainer
          key={index}
          title={item.title}
          icon={item.icon}
          texts={item.texts}
        />
      ))}
    </div>
  );
};
