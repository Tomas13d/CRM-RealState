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
              data: [100, 200, 1000],
              backgroundColor: ["#613090", "#846DB3", "#3D62D5"],
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
