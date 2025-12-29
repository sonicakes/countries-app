import logo from "../../assets/logo-pin.png";
import ModeSwitch from "../ui/ModeSwitch";
import { Link } from "react-router";

const Nav = ({ mode, onChangeMode }) => {
  return (
    <header
      className={`${
        mode === "light" ? "bg-white" : "bg-blue-900 text-white"
      } relative shadow-md`}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center gap-2 py-2">
              <img src={logo} className="w-10" />
              <span className="text-xl font-bold tracking-wide">
                Where in the world?
              </span>
            </div>
          </Link>

          <ModeSwitch mode={mode} onChangeMode={onChangeMode} />
        </div>
      </div>
    </header>
  );
};

export default Nav;
