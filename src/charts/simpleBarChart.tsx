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
  Label,
  ResponsiveContainer,
} from "recharts";
import { data } from "./chartData";
import CustomTooltip from "../components/customTooltip";
const SimpleBarChart: React.FC = () => {
  
  return (
    <div className="flex flex-col justify-center items-center h-screen">
       <h1 className="text-2xl font-bold mt-20 text-white">CO2 Emission Rate vs Country Bar Chart</h1>
     <ResponsiveContainer width="80%" height="80%" aspect={3} className="mt-20">
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
