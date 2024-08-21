import {
  ChatBubbleLeftRightIcon,
  ShieldExclamationIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import {
  InformationContainer,
  InformationContainerProps,
} from "./InformationContainer";
import { useThemeContext } from "../../context/ThemeProvider";

const items: InformationContainerProps[] = [
  {
    title: "Examples",
    icon: <ChatBubbleLeftRightIcon className="size-6" />,
    texts: [
      '"Explain quantum computing in simple terms"',
      '"Got any creative ideas for a 10 year old’s birthday?"',
      '"How do I make an HTTP request in Javascript?"',
    ],
  },
  {
    title: "Capabilities",
    icon: <SparklesIcon className="size-6" />,
    texts: [
      '"Remembers what user saidearlier in the conversation."',
      '"Allows user to provide follow-up corrections."',
      '"Trained to decline inappropriate requests."',
    ],
  },
  {
    title: "Limitations",
    icon: <ShieldExclamationIcon className="size-6" />,
    texts: [
      '"May occasionally generate incorrect information."',
      '"May occasionally produce harmful instructions or biased content."',
      '"Limited knowledge of world andevents after 2021."',
    ],
  },
];

export const Information = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`flex flex-col items-center justify-center h-full
    ${theme === "dark" ? "bg-black" : "bg-white"}`}
    >
      <div className="w-10/12 flex flex-row justify-around">
        {items.map((item, index) => (
          <InformationContainer
            key={index}
            title={item.title}
            icon={item.icon}
            texts={item.texts}
          />
        ))}
      </div>
    </div>
  );
};
