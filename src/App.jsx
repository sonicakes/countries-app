import HomePage from "./pages/home";
import { Routes, Route } from "react-router";
import NotFoundPage from "./pages/notfound";
import CountryDetailsPage from "./pages/country-details";
import Nav from "./components/layout/Nav";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState('light');
  const handleMode = (m) => {
    if (m==="light") {
      setMode("dark");
    }else {
      setMode("light");
    }
  }
  return (
      <div className={`relative min-h-screen ${mode==="light" ? 'bg-grey-50' : 'bg-blue-950'}`}>
        <Nav mode={mode} onChangeMode={handleMode}/>
        <Routes>
          <Route path="/" element={<HomePage mode={mode}/>} />
          <Route path="/country/:name" element={<CountryDetailsPage mode={mode}/>} />
          <Route path="*" element={<NotFoundPage mode={mode}/>} />
        </Routes>
     
      </div>
  );
};

export default App;
