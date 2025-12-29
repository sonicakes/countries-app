import backIcon from "../../assets/back.png";

const BackBtn = ({ label = "Back", mode }) => {
  return (
    <button
      className={`${
        mode === "light"
          ? "bg-white text-grey-950 hover:bg-teal-primary/10"
          : "bg-blue-900 text-white hover:bg-teal-primary/30"
      } px-4 py-2 flex gap-2 items-center hover:bg-teal-primary/10 transition-all shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] cursor-pointer rounded-lg`}
    >
      <span>
        <img
          className={`${mode === "dark" ? "invert" : ""} w-5`}
          src={backIcon}
        />
      </span>
      {label}
    </button>
  );
};

export default BackBtn;
