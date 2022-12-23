import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function Nav() {
  const [night, setNight] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div className="m-10 sm:m-0">
      <nav className="flex flex-col sm:flex-row justify-between text-[#323231] font-semibold">
        <div className="mb-10">
          <div className="flex justify-between">
            <a href="/">Abu Hanifa</a>
            <p onClick={()=>setMenu(!menu)}>
              {menu ? (
                <AiOutlineMenu className="text-xl" />
              ) : (
                <AiOutlineClose className="text-xl" />
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Skills</a>
          <a href="/">Service</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact</a>
          <div
            className="flex justify-center items-center cursor-pointer "
            onClick={() => setNight(!night)}
          >
            {night ? (
              <FaMoon className="inline text-2xl" />
            ) : (
              <BsSun className="inline text-2xl" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
