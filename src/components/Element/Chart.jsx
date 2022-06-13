
// import fabric from 'fabric'
// import 'chart-js-fabric'
// import React, { useContext } from 'react'
// import { Button } from '@chakra-ui/react'
// import CanvasContext from '../../context/ContextCanvas'

// const Chart = () => {
//     const [canvas] = useContext(CanvasContext)

//     const addChart = () => {


//         canvas.add(new fabric.Chart({
//             width: 100, height: 100, chart: {
//                 type: 'bar',
//                 data: {
//                     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//                     datasets: [
//                         {
//                             label: '# of Votes',
//                             data: [Math.random(), Math.random()],
//                             backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
//                         }
//                     ]
//                 }
//             }
//         })
//         ).requestRenderAll()
//     }

//     return (

//         <Button onClick={addChart} variant={'ghost'}
//             _hover={{}}
//             _focus={{}}
//             _active={{}}
//             textColor={'white'}
//             fontWeight={'light'} >
//             Add Chart
//         </Button>

//     )
// }

// export default Chart;
