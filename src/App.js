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
      <section className="flex my-40">
        <div className="h-screen flex flex-col items-center">
          {/* -----icons----- */}
          <div className="flex flex-col gap-10 text-2xl mr-20">
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
        <section className="mx-20 flex ">
          <div className="w-1/2 my-20">
            <h1 className="text-4xl font-bold">Mohammed Abu Hanifa</h1>
            <p className="text-2xl font-semibold my-2">Web Developer</p>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illo incidunt autem quia optio soluta atque corrupti! Provident accusamus id omnis harum nesciunt blanditiis facilis.
            </p>
          </div>
          <div className="w-1/2 px-20">
            <img src="https://avatars.githubusercontent.com/u/90899296?v=4" alt="" className="w-96 rounded-xl"/>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
