import React,{useEffect, useState} from 'react'
import {Chart,Tooltip, Title, ArcElement, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'
import Read from '../APIServices/ReadTotalTypeAPI';

Chart.register(
    Tooltip,Title,ArcElement,Legend
)

function PieChart(){

    const [Data , SetData] = useState({
        
        labels: [
          'Income',
          'Expense',
        
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            
          ],
          hoverOffset: 1
        }]
      })

      useEffect(()=>{
        Read().then((result)=>{
            let Data = []
            let Label = []
        
        for(var i of result){
            Label.push(i._id)
            Data.push(i.total)
        }
        SetData({labels: Label,
          datasets: [{
            label: 'My First Dataset',
            data: Data,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(60, 179, 113)',
              'rgb(255, 165, 0)'

              
            ],
            hoverOffset: 1
          }]})
        })

      },[])

    return(
        <div>
            <Doughnut data={Data}/>
        </div>
        
    );
}

export default PieChart
