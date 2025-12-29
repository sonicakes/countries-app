import backIcon from "../../assets/back.png";

const BackBtn = ({ label = "Back" }) => {
  return (
    <button className="flex gap-2 items-center hover:bg-teal-primary/10 transition-all shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] cursor-pointer rounded-lg bg-white text-grey-950 px-4 py-2">
      <span>
        <img className="w-5" src={backIcon} />
      </span>{" "}
      {label}
    </button>
  );
};

export default BackBtn;
