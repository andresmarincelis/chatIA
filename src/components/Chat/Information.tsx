import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react"
import { InformationContainer } from "./InformationContainer";

interface InfoOptions {
    title: string;
    icon: ReactNode;
    text1: string;
    text2: string;
    text3: string;
}

const items: InfoOptions[] = [
    {
        title: "Examples",
        icon: <ChatBubbleLeftRightIcon className="size-6"/>,
        text1: "Explain quantum computing insimple terms",
        text2: "Got any creative ideas for a 10year old's brithday?",
        text3: "How do I make an HTTP requestin Javascript?" 
    }
]

export const Information = () => {
  return (
    <div className="flex flex-col items-center">
        {items.map((item, index) => (
            <InformationContainer key={index} title={item.title} icon={item.icon} text1={item.text1} text2={item.text2} text3={item.text3}/>
        ))}
    </div>
  )
}