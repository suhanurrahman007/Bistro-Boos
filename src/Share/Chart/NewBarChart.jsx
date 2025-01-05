import { Legend, Tooltip } from "chart.js";
import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

const NewBarChart = () => {
  const [hoveredBar, setHoveredBar] = useState(null);

  const data = [
    { name: "Payment", value: 34 },
    { name: "Order", value: 78 },
    { name: "Delivered", value: 66 },
    { name: "Return", value: 45 },
    { name: "Delivery", value: 56 },
  ];

  return (
    <BarChart
      className=" py-5 pr-5 rounded-md shadow-xl"
      width={500}
      height={400}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#6B25AC">
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={index === hoveredBar ? "#00000" : "#6B25AC"} // Change color on hover
            onMouseEnter={() => setHoveredBar(index)}
            onMouseLeave={() => setHoveredBar(null)}
          />
        ))}
      </Bar>
    </BarChart>
  );
};

export default NewBarChart;
