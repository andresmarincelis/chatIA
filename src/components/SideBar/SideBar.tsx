import { SideBarPrimary } from "./SideBarPrimary";
import { SideBarSecond } from "./SideBarSecond";

export const SideBar = () => {
  return (
    <div className="flex flex-col h-screen justify-between border border-right">
      <SideBarPrimary />
      <SideBarSecond />
    </div>
  );
};
