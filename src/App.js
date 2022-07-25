import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Announcement } from "./components/Announcement";
import { NavBar } from "./components/NavBar";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Announcement />
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
