import { SideBarHOC } from "./components/SideBar/SideBarHOC";
import { Input } from "./components/Chat/Input";
import { Information } from "./components/Chat/Information";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <SideBarHOC>
      {/* <div>
        <Information />
      </div> */}
      <Login/>
      <div className="flex justify-center absolute bottom-0 left-0 right-0 pt-5 pb-10">
        <div className="w-1/2">
          <Input />
        </div>
      </div>
    </SideBarHOC>
  );
}

export default App;
