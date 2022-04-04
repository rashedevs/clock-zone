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
                <h3>Monthly Sell</h3>
            </div>
            <div>
                <MyAreaChart data={data}></MyAreaChart>
                <h3>Sell VS Revenue</h3>
            </div>
            <div>
                <MyBarChart data={data}></MyBarChart>
                <h3>Sell-Revenue-Investment</h3>
            </div>
        </div>
    );
};

export default Dashboard;