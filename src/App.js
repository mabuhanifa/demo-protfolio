
import "./App.css";
import About from "./components/About";
import Main from "./components/Main";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="2xl:mx-40 xl:mx-20 my-10">
      <Nav/>
      <Main/>
      <About/>
      
    </div>
  );
}

export default App;
