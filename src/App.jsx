import map from "./assets/map.png";
import HomePage from "./pages/home";
import { Routes, Route } from "react-router";
import NotFoundPage from "./pages/notfound";
import CountryDetailsPage from "./pages/country-details";
import Nav from "./components/layout/Nav";

const App = () => {
  return (
    <>
      <div className="relative min-h-screen bg-grey-50">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<CountryDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <img
          src={map}
          className="absolute w-full h-full inset-0 z-50 opacity-15 object-cover pointer-events-none"
        />
      </div>
    </>
  );
};

export default App;
