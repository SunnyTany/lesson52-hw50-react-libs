export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  }
}

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)'
    },
    {
      label: 'Second Dataset',
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)'
    }
  ]
}