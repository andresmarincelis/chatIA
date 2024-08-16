import { ButtonNewChat } from "./ButtonNewChat";
import { TextSaved } from "./TextSaved";

export const SideBarPrimary = () => {
  return (
    <div className="flex flex-col gap-y-1 py-5 px-5">
      <ButtonNewChat />
      <TextSaved info="Chat anterior" />
    </div>
  );
};
