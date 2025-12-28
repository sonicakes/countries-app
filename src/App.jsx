import HomePage from "./pages/home";
import { Routes, Route } from "react-router";
import NotFoundPage from "./pages/notfound";
import CountryDetailsPage from "./pages/country-details";
import Nav from "./components/layout/Nav";

const App = () => {
  return (
      <div className="relative min-h-screen bg-grey-50">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<CountryDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
     
      </div>
  );
};

export default App;
