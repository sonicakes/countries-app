const BackBtn = ({ label = "Back" }) => {
  return (
    <button className="shadow-lg cursor-pointer rounded-lg bg-white text-grey-950 px-4 py-2">
      {label}
    </button>
  );
};

export default BackBtn;
