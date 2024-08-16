import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

interface TextSavedProps {
  info: string;
}

export const TextSaved = ({ info }: TextSavedProps) => {
  return (
    <div className="flex justify-center items-center bg-white">
      <ChatBubbleBottomCenterTextIcon className="size-6" />
      <span className="py-3 px-3 rounded-lg">{info}</span>
    </div>
  );
};
