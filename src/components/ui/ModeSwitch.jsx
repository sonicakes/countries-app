import moonIcon from "../../assets/moon.png";
import sunIcon from "../../assets/sun.png";

const ModeSwitch = ({ mode, onChangeMode }) => {
  return (
    <>
      <button className="flex gap-2 items-center capitalize cursor-pointer hover:text-teal-primary font-bold text-base"
      onClick={() => onChangeMode(mode)}>
        <span>
            <img src={mode==="light" ? moonIcon : sunIcon} className='[filter:invert(56%)_sepia(70%)_saturate(541%)_hue-rotate(127deg)_brightness(94%)_contrast(88%)] w-5'/>
        </span>
        Switch to {mode==="light" ? "dark" : "light"}
        </button>
    </>
  );
};

export default ModeSwitch;
