import { SideBarHOC } from '../components/SideBar/SideBarHOC'

export const Profile = () => {
  return (
    <SideBarHOC>
      <div className="w-full bg-blue-500">
        <p>Esta es la pantalla del profile</p>
      </div>
    </SideBarHOC>
  )
}
