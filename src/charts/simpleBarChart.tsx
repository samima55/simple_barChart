import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "./chartData";
import CustomTooltip from "../components/customTooltip";
const SimpleBarChart: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ResponsiveContainer width="80%" height="80%" aspect={3} className="mt-12">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip content={<CustomTooltip/>} />
          <Legend />
          <Bar
            dataKey="co2Emission2010"
            fill="#FFFFFF"
            barSize={20}
            activeBar={<Rectangle  fill="#000000"  />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleBarChart;
