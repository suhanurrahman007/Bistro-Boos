import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  const data = {
    labels: ["Users", "Order", "Payment", "Return", "Delivered"],
    datasets: [
      {
        label: "Count",
        data: [34, 56, 40, 32, 78],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 6, // Increase hover effect size
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Makes chart scalable
    plugins: {
      legend: {
        display: true,
        position: "right", // Legend position
        labels: {
          color: "#333", // Legend text color
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Revenue Sources", // Title text
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = data.labels[tooltipItem.dataIndex];
            const value = data.datasets[0].data[tooltipItem.dataIndex];
            return `${label}: ${value}`;
          },
        },
      },
    },
    animation: {
      animateScale: true, // Animates scaling of chart
      animateRotate: true, // Animates rotation
    },
  };

  return (
    <div className="w-full h-96">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
