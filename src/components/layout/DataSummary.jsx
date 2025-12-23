import PopulationChart from "../charts/PopulationChart";
const DataSummary = ({ region, data }) => {
    return ( <>
   <h3> hello data for {region}</h3>
    <PopulationChart countriesData={data} region={region}/>
    </> );
}
 
export default DataSummary;