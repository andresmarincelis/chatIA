import { useThemeContext } from "../../../context/ThemeProvider";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Message } from "../../../context/ChatContextProvider";

export default function MessageBlock({ message }: { message: Message }) {
  const { theme } = useThemeContext();
  return (
    <div
      className={`ml-3 max-w-screen-2xl w-full ${
        theme === "dark" ? "text-white" : "text-bg_dark"
      }`}
    >
      <span>{message.agent === "human" ? "You" : "Fourthane Agent"}</span>
      <div className="w-full mt-1.5">
        {message.agent === "human" ? (
          <pre className=" text-sm mt-1 break-words whitespace-pre-wrap">
            {message.message}
          </pre>
        ) : (
          <pre className="break-words whitespace-pre-wrap">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ ...props }) => (
                  <a className="underline" {...props} target="_blank">
                    {props.children}
                  </a>
                ),
              }}
            >
              {message.message}
            </Markdown>
          </pre>
        )}
      </div>
    </div>
  );
}
