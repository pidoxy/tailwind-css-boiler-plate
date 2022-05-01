import { AppContextProvider } from "./context/AppContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


const App = () => {
  return (
    <ThemeContextProvider>
      <AppContextProvider>
        <div className="bg-white flex flex-col dark:bg-slate-900">
          <Header />
          <Sidebar />
        </div>
      </AppContextProvider>
     </ThemeContextProvider>
  );
};

export default App;
