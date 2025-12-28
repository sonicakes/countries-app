import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import BackBtn from "../components/ui/BackBtn";
import CountryDetail from "../components/layout/CountryDetail";
const API_URL = import.meta.env.VITE_ROOT_API;

const CountryDetailsPage = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`${API_URL}/name/${name}`);
        if (!res.ok) throw new Error("error fetching deets");
        const data = await res.json();
        setCountry(data[0]);
        console.log(data[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
  }, [name]);

  return (
    <div className=" bg-grey-50 relative z-90 shadow-md">
           <div className="mx-auto max-w-5xl px-6 lg:px-8 py-10">
      <Link to="/">
        <BackBtn />
      </Link>
      {/* {loading && <Spinner />} */}
      {loading && <p>loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && 
        <CountryDetail country={country} />
      }
    </div>
    </div>
 
  );
};

export default CountryDetailsPage;
