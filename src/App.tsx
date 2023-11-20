import React from 'react';
import SimpleBarChart from './charts/simpleBarChart';
import 'tailwindcss/tailwind.css';

const App: React.FC = () =>{
  return (
    
      <div className=' bg-gray-950'>
      <SimpleBarChart/>
      </div>
  );
}

export default App;
