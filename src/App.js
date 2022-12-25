import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Services from "./components/Services";
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:bg-black 2xl:px-40 xl:px-20 py-10 ">
      <Nav handleSwitch={handleSwitch} />
      <Main />
      <About />
      <Services />
    </div>
  );
}

export default App;
