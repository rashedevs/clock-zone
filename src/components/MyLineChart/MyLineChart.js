import React from 'react';
import './MyLineChart.css'
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = (props) => {
    const { data } = props
    return (
        <div className='line-chart'>
            <LineChart width={400} height={400} data={data}>
                <Line dataKey="sell" stroke="#8884d8"></Line>
                <Line dataKey="revenue" stroke="#82ca9d"></Line>
                <Line dataKey="investment" stroke="#16E2F5"></Line>
                <XAxis dataKey="month"></XAxis>
                <YAxis dataKey=""></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default MyLineChart;