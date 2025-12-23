import { Bar } from "react-chartjs-2";
//TODO: adapt data to only display 10 top countries, no need for all of them
//adjust bar chart to be larger( indiv.cols/bars esp. )
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PopulationChart = ({ countriesData, region }) => {
  const countriesPopulation = countriesData.map((country) => {
    return country.population;
  });

  const countriesNames = countriesData.map((country) => {
    return country.name.common;
  });

  const data = {
    labels: countriesNames,
    datasets: [
      {
        label: "Population",
        data: countriesPopulation,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Population in ${region}`,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PopulationChart;
