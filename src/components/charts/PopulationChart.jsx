import { Bar } from "react-chartjs-2";
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

ChartJS.defaults.font.family = "Nunito Sans, sans-serif";
ChartJS.defaults.font.size = 14;
ChartJS.defaults.color = "hsl(200, 15%, 8%)";

const PopulationChart = ({ countriesData, region, mode }) => {
  const topTenCountries = [...countriesData]
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);

  const countriesPopulation = topTenCountries.map((country) => {
    return country.population;
  });

  const countriesNames = topTenCountries.map((country) => {
    return country.name.common;
  });

  const textColor = mode === "light" ? "#000" : "#fff";
  const gridColor =
    mode === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)";
  const data = {
    labels: countriesNames,
    datasets: [
      {
        label: "Population",
        data: countriesPopulation,
        backgroundColor: "rgba(13, 148, 136, 0.5)",
        borderColor: "rgba(13, 148, 136, 0.8)",
        borderWidth: 0.5,
        barThickness: 25,
        maxBarThickness: 30,
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
        ticks: {
          color: textColor,
        },
        grid: {
          color: gridColor, 
        },
      },
      y: {
        ticks: {
          color: textColor,
        },
        grid: {
          color: gridColor, 
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        font: {
          size: 20,
          weight: "bold",
        },
        padding: {
          bottom: 20,
        },
        text: `Top 10 Countries by Population in ${region}`,
        color: textColor,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "500px", margin: "40px auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PopulationChart;
