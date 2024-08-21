import { ThemeProvider } from "./context/ThemeProvider";
import { Chat } from "./screens/Chat";

function App() {
  return (
    <ThemeProvider>
      <Chat />
    </ThemeProvider>
  );
}

export default App;
