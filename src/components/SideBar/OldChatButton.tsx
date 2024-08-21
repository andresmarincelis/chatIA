import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { useThemeContext } from "../../context/ThemeProvider";

interface OldChatButtonProps {
  info: string;
}

export const OldChatButton = ({ info }: OldChatButtonProps) => {
  const { theme } = useThemeContext();

  return (
    <button
      className={`flex justify-center items-center ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <ChatBubbleBottomCenterTextIcon className="size-6" />
      <span className="py-3 px-3 rounded-lg">{info}</span>
    </button>
  );
};
