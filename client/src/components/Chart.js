import React from 'react';
import {
    BarChart,
    Bar, 
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';



const Chart = () => {
    const data= [
        {name: 'Alex Morgan', country: 'United States', searches: 100},
        {name: 'Megan Rapinoe', country: 'United States', searches: 99},
        {name: 'Marta', country: 'Brazil', searches: 18},
        {name: 'Rose Lavelle', country: 'United States', searches: 11},
        {name: 'Carli Lloyd', country: 'United States', searches: 9},
        {name: 'Julie Ertz', country: 'United States', searches: 8},
        {name: 'Christen Press', country: 'United States', searches: 8},
        {name: "Kelley O'Hara", country: 'United States', searches: 8},
        {name: 'Tobin Heath', country: 'United States', searches: 7},
        {name: 'Wendie Renard', country: 'France', searches: 7}
    ]
    
    return (
        <BarChart width={1000} height={500} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="searches" fill="dodgerblue" />
            <Bar dataKey="country" fill="dodgerblue" />
        </BarChart>
    )
};

export default Chart;