import { Line } from 'react-chartjs-2'
import { CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, Title, Tooltip } from 'chart.js'
import { data, options } from '../src/configs/chartConfig.ts'

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, Filler)

const updatedData = {
  ...data,
  datasets: data.datasets.map((dataset) => {
    const rgbValues = dataset.backgroundColor.match(/\d+/g)
    const rgb = rgbValues ? rgbValues.join(', ') : '255, 99, 132' 

    return {
      ...dataset,
      fill: true, 
      backgroundColor: `rgba(${rgb}, 0.2)`
    }
  })
}

const Charts = () => {
  return <Line options={options} data={updatedData} />
}

export default Charts