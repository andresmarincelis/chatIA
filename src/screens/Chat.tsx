import { Information } from '../components/Chat/Information'
import { Input } from '../components/Chat/Input'
import { SidebarTemplate } from '../components/HOC/SidebarTemplate'
import { useThemeContext } from '../context/ThemeProvider'

export const Chat = () => {

const { theme } = useThemeContext();

  return (
    <SidebarTemplate>
      <div className='h-[87%]'>
        <Information />
      </div>
      <div className={`flex justify-center absolute bottom-0 left-0 right-0 pt-5 pb-10 h-[13%]
        ${theme === "dark"
          ? "bg-black"
          : "bg-white"
        }`}>
        <div className="flex items-end w-1/2">
          <Input />
        </div>
      </div>
    </SidebarTemplate>
  )
}
