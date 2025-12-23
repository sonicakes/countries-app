import logo from "../../assets/logo-pin.png";
import ModeSwitch from "../ui/ModeSwitch";
const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 py-2">
        <img src={logo}  className="w-10"/>
        <span className="text-xl font-bold tracking-wide">Where in the world?</span>
      </div>
      <ModeSwitch />
    </div>
  );
};

export default Nav;
