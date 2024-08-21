import { MicrophoneIcon, PaperAirplaneIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useThemeContext } from "../../context/ThemeProvider";

export const Input = () => {

const { theme } = useThemeContext();

  return (
    <div
      className={`flex w-full py-5 px-4 rounded-2xl flex-row
        ${theme === "dark"
          ? "bg-gray-700 text-white"
          : "bg-gray-200 text-black"
        }`}
    >
      <div className="flex flex-row w-full mr-4">
        <div className="flex flex-row gap-x-2 mr-4">
          <MicrophoneIcon className="size-6" />
          <PhotoIcon className="size-6" />
        </div>
        <input
          className={`w-full bg-transparent outline-0
            ${theme === "dark"
              ? "text-white"
              : "text-black"
            }`}
          type="text"
          placeholder="  Type Message"
        />
      </div>
      <button className="bg-transparent">
      <PaperAirplaneIcon className="size-6 rounded-lg"/>
      </button>
    </div>
  );
};
