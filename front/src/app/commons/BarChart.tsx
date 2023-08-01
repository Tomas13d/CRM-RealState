import { Bar } from "react-chartjs-2";

interface BarChartProps {
  data: number[];
  labels: string[];
  colors: string[];
}

const BarChart: React.FC<BarChartProps> = ({ data, labels, colors }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;
