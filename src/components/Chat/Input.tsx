import { MicrophoneIcon, PaperAirplaneIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { inputBg } from "../../utils/colors";

export const Input = () => {
  return (
    <div
      style={{ backgroundColor: inputBg }}
      className="flex w-full py-5 px-4 rounded-2xl flex-row"
    >
      <div className="flex flex-row w-full mr-4">
        <div className="flex flex-row gap-x-2 mr-4">
          <MicrophoneIcon className="size-6" />
          <PhotoIcon className="size-6" />
        </div>
        <input
          className="w-full bg-transparent outline-0"
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
