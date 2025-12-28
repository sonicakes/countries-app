import logo from "../../assets/logo-pin.png";
import ModeSwitch from "../ui/ModeSwitch";
const Nav = () => {
  return (
    <header className="bg-white relative  shadow-md">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 py-2">
            <img src={logo} className="w-10" />
            <span className="text-xl font-bold tracking-wide">
              Where in the world?
            </span>
          </div>
          <ModeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Nav;
