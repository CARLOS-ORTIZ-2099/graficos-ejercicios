import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { StateContext } from '../context/StateContext';

ChartJS.register(ArcElement, Tooltip, Legend);




export const Chart = () => {

const {state : {quantity}} = useContext(StateContext)
console.log(quantity);


const data = {
  labels: quantity.map(category => category.category),
  datasets: [
    {
      label: 'quantity total',
      data: quantity.map(quantity => quantity.quantity),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

  return (
    <div>
      <Pie data={data} />
    </div>
  )
}
