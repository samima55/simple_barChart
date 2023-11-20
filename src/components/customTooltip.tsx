import React from 'react';
import { TooltipProps } from 'recharts';

const CustomTooltip: React.FC<TooltipProps<any, any>> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black p-5 rounded">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
