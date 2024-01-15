import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DynamicBarChart = () => {
  const [barData, setBarData] = useState(['','','','']);
  const [showInputs, setShowInputs] = useState(false);

  const options = {
    plugins: {
      legend: {
        position: 'top',
        maintainAspectRatio: true,
        
      },
      title: {
        position: 'top',
        display: true,
        text: 'Bar Chart',
        font: {
          size: 25,
        },
      },
    },
  };

  const data = {
    labels: ['bar 1', 'bar 2', 'bar 3', 'bar 4'],
    datasets: [
      {
        label: 'Value',
        data: barData,
        backgroundColor: 'green',
      },
    ],
  };

  const handleInputChange = (index, value) => {
    const numericValue = Number(value);
    const updatedData = [...barData];
    updatedData[index] = numericValue >= 0 ? numericValue : 0;
    setBarData(updatedData);
  };

  const handleButtonClick = () => {
    setShowInputs(prevShowInputs => !prevShowInputs);
  };

  return (
<div className='flex flex-wrap justify-center items-center h-96 mt-10 p-2'>
  <div className="relative w-full sm:w-3/4 lg:w-1/2 xl:w-2/5 bg-white rounded-2xl overflow-hidden shadow-lg">
    
    <div className="flex justify-end items-center p-4">
      <button
        onClick={handleButtonClick} // This should toggle the showInputs state
        className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate Chart
      </button>
    </div>
    
    {/* Graph */}
    <Bar data={data} options={options} />
    
    {/* Pop-up Modal */}
    {showInputs && (
      <div className="absolute inset-0 bg-gray-200 bg-opacity-40 flex justify-end items-center">
        <div className="bg-white p-3 rounded-lg shadow-lg w-full sm:w-auto">
          <div className="flex flex-col items-strech">
            {barData.map((value, index) => (
              <input
                key={index}
                type="number"
                value={value}
                min="0"
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="mb-4 p-2 border-2 border-gray-300 rounded"
              />
            ))}
            <button
              onClick={() => setShowInputs(false)} // This should hide the modal
              className="mb-1 bg-red-700 hover:bg-red-900 text-white h-8 font-bold py-1 px-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )}

  </div>
</div>

  );
};

export default DynamicBarChart;
