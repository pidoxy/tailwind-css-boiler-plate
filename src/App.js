import { AppContextProvider } from "./context/AppContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import Toggle from "./components/ThemeToggle";


const App = () => {
  return (
    <ThemeContextProvider>
      <AppContextProvider>
        <div className="bg-white dark:bg-slate-900 h-screen">
          <Toggle />
        </div>
      </AppContextProvider>
     </ThemeContextProvider>
  );
};

export default App;
