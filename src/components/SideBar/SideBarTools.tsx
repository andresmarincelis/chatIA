import { ReactNode } from "react";

interface SideBarToolsProps {
  name: string;
  icon: ReactNode;
}

export const SideBarTools = ({ name, icon }: SideBarToolsProps) => {
  return (
    <div className="flex justify-start items-center">
      {icon}
      <span className="py-3 px-3 rounded-lg">{name}</span>
    </div>
  );
};
