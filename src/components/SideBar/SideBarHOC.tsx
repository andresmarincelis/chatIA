import { ReactNode } from "react";
import { SideBar } from "./SideBar";

export const SideBarHOC = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="h-screen w-full relative">{children}</div>
    </div>
  );
};
