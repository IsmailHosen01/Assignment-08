import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import React from 'react';


const MyBarChart = ({ ratings }) => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart
                data={ratings}
                layout="vertical"
            >
                <XAxis type="number" />
                <YAxis
                    dataKey="name"
                    type="category"
                />
                {/* <Tooltip /> */}
                <Bar dataKey="count" fill="#ff8811" barSize={20} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyBarChart;