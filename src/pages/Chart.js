import React from 'react'
import { Chart } from 'react-charts'
import { useSelector } from 'react-redux';
import moment from 'moment'
function ChartComponent() {
    const expenses = useSelector((state) => state.firebase.ordered.expenses)
    const data = React.useMemo(
        () => [
            {
                label: 'expenses',
                data: expenses.map(el => ({x: Math.floor(moment(el.value.date).month()),y:parseFloat(el.value.amount)}))
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left',label:"asba" }
        ],
        []
    )


    const lineChart = (
        <>
        <h1>Chart</h1>
        <p>x: months number <br /> y: amount (EUR)</p>
        <br/>
        <div
            style={{
                width: '1000px',
                height: '400px'
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
        </>
    )
    return lineChart
}


export default ChartComponent
