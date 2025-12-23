import Nav from "./components/layout/Nav";
import map from "./assets/map.png";

const App = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-100 pb-8">
          <Nav />
          {/* 
            <FilteringTools />
            <CountriesGrid /> 
          */}
        </div>
        <img
          src={map}
          className="absolute top-0 left-0 w-full h-full z-50 opacity-15 object-cover"
        />
      </div>
    </>
  );
};

export default App;
