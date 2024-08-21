import { Message } from "../../../context/ChatContextProvider";
import { UserIcon } from "@heroicons/react/24/outline";
import { images } from "../../assets/images";

export default function MessageLogo({ message }: { message: Message }) {
  return (
    <div className="min-w-8">
      <div
        className={`w-8 h-8 rounded-full flex justify-center items-center overflow-hidden ${
          message.agent === "human" ? "bg-blue-500" : "bg-green-500"
        }`}
      >
        {message.agent === "human" ? (
          <div>
            <UserIcon className="w-6 h-6 text-white" />
          </div>
        ) : (
          <img alt="pfp" src={images.BuilderVector} />
        )}
      </div>
    </div>
  );
}
