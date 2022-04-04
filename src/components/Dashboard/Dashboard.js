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
                <p>Line Chart</p>
            </div>
            <div>
                <MyAreaChart data={data}></MyAreaChart>
                <p>Area Chart</p>
            </div>
            <div>
                <MyBarChart data={data}></MyBarChart>
                <p>Bar Chart</p>
            </div>
        </div>
    );
};

export default Dashboard;