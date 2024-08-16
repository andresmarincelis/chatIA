import { buttonColor, textColor } from "../../utils/colors"

export const ButtonNewChat = () => {
  return (
    <button
      style={{ backgroundColor: buttonColor, color: textColor }}
      className="flex w-full px-4 py-2 rounded-xl text-lg leading-6 justify-center"
    >
      + New Chat
    </button>
  )
}
