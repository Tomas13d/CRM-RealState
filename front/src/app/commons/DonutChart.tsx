"use client";
import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { Box } from "@mui/material";

interface DonutChartProps {
  data: number[];
  labels: string[];
  colors: string[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data, labels, colors }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const donutChart = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: data,
              backgroundColor: colors,
            },
          ],
        },
      });
    }
  }, []);

  return (
    <Box sx={{ height: "200px", width: "200px" }}>
      <canvas ref={chartRef} />
    </Box>
  );
};
export default DonutChart;
