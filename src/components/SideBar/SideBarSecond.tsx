import { ReactNode } from "react";
import { SideBarTools } from "./SideBarTools";
import {
  ArrowRightEndOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  SunIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

interface ToolOptions {
  name: string;
  icon: ReactNode;
}
const items: ToolOptions[] = [
  {
    name: "Clear conversations",
    icon: <TrashIcon className="size-6" />,
  },
  {
    name: "Light Mode",
    icon: <SunIcon className="size-6" />,
  },
  {
    name: "My account",
    icon: <UserIcon className="size-6" />,
  },
  {
    name: "Updates & FAQ",
    icon: <ArrowTopRightOnSquareIcon className="size-6" />,
  },
  {
    name: "Log Out",
    icon: <ArrowRightEndOnRectangleIcon className="size-6" />,
  },
];

export const SideBarSecond = () => {
  return (
    <div className="flex flex-col gap-y-1 py-5 px-5 border-top border">
      {items.map((item, index) => (
        <SideBarTools key={index} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
};
