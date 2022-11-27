import { FiGithub, FiInstagram } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import "./App.css";
function App() {
  return (
    <div className="mx-40 my-10">
      <nav className="flex justify-between text-[#323231] font-semibold">
        <div>Abu Hanifa</div>
        <div className="flex justify-between gap-10">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Sills</a>
          <a href="/">Service</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact</a>
        </div>
      </nav>
      <section>
        <div className="my-40">
          {/* -----icons----- */}
          <div className="flex flex-col gap-10 text-2xl">
            <span>
              <FiInstagram />
            </span>
            <span>
              <FiGithub />
            </span>
            <span>
              <RiFacebookCircleLine />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
