import PopulationChart from "../charts/PopulationChart";
const DataSummary = ({ region, data }) => {
    return ( <>
    <PopulationChart countriesData={data} region={region}/>
    </> );
}
 
export default DataSummary;