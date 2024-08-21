import { ButtonNewChat } from "./ButtonNewChat";
import { OldChatButton } from "./OldChatButton";

export const TopPanel = () => {
  return (
    <div className="flex flex-col gap-y-1 py-5 px-5">
      <ButtonNewChat />
      <OldChatButton info="Chat anterior" />
    </div>
  );
};
