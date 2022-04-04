import React, { useEffect, useState } from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Dashboard.css'


const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='chart-container'>
            <div>
                <MyLineChart data={data}></MyLineChart>
                <p><small>Line Chart</small></p>
            </div>
            <div>
                <MyAreaChart data={data}></MyAreaChart>
                <p><small>Area Chart</small></p>
            </div>
            <div>
                <MyBarChart data={data}></MyBarChart>
                <p><small>Bar Chart</small></p>
            </div>
        </div>
    );
};

export default Dashboard;