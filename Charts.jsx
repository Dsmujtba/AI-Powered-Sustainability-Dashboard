import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const LineChartComponent = ({ data, dataKey }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={dataKey} stroke="#8884d8" name="Historical" />
      <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" strokeDasharray="5 5" name="AI Forecast" />
    </LineChart>
  </ResponsiveContainer>
);

export const BarChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="sdg" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="score" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);
