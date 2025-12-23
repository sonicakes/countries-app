import map from "./assets/map.png";
import MainWrapper from "./components/wrappers/MainWrapper";
const App = () => {
  return (
    <>
      <div className="relative min-h-screen bg-grey-50">
        <MainWrapper />
        <img
          src={map}
          className="absolute w-full h-full inset-0 z-50 opacity-15 object-cover"
        />
      </div>
    </>
  );
};

export default App;
