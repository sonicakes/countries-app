import PopulationChart from "../charts/PopulationChart";
const DataSummary = ({ region, data, mode }) => {
    return ( <>
    <PopulationChart countriesData={data} region={region} mode={mode}/>
    </> );
}
 
export default DataSummary;