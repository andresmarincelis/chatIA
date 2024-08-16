import { SideBarHOC } from '../components/SideBar/SideBarHOC'

export const Chat = () => {
  return (
    <SideBarHOC>
      <div className="bg-red-500 w-1/2">
        <p>Soy la pantalla de chat</p>
      </div>
    </SideBarHOC>
  )
}
