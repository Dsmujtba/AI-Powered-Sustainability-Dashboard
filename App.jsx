import React, { useState, useEffect } from 'react';
import MetricCard from './components/MetricCard';
import { LineChartComponent, BarChartComponent } from './components/Charts';
import { generateHistoricalData, generateForecastData } from './utils/dataGeneration';
import { AlertCircle, TrendingUp, BarChart2, Settings, DollarSign, Globe } from 'lucide-react';

const SustainabilityDashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState('emissions');
  const [historicalData, setHistoricalData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [sdgScores, setSdgScores] = useState({});

  useEffect(() => {
    const historical = generateHistoricalData(12);
    setHistoricalData(historical);
    setForecastData(generateForecastData(6, historical[historical.length - 1]));
    setSdgScores({
      1: Math.random() * 100,
      5: Math.random() * 100,
      7: Math.random() * 100,
      12: Math.random() * 100,
      13: Math.random() * 100,
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Sustainability Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <MetricCard title="Carbon Emissions" value="1,234 tCO2e" change={-5.2} icon={AlertCircle} impact="-$50,000" />
        <MetricCard title="Water Usage" value="45,678 m³" change={2.1} icon={TrendingUp} impact="+$10,000" />
        <MetricCard title="Waste Generated" value="890 tons" change={-1.8} icon={BarChart2} impact="-$5,000" />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Environmental Impact Forecast</h2>
        <div className="mb-4">
          <select 
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="emissions">Carbon Emissions</option>
            <option value="water">Water Usage</option>
            <option value="waste">Waste Generated</option>
          </select>
        </div>
        <LineChartComponent data={historicalData.concat(forecastData)} dataKey={selectedMetric} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">SDG Alignment Scores</h2>
          <BarChartComponent data={Object.entries(sdgScores).map(([sdg, score]) => ({ sdg: `SDG ${sdg}`, score }))} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">AI-Powered Insights</h2>
          <ul className="space-y-2">
            <li className="flex items-center text-green-500">
              <TrendingUp className="mr-2" size={16} />
              Potential 15% emissions reduction by optimizing supply chain routes
            </li>
            <li className="flex items-center text-blue-500">
              <DollarSign className="mr-2" size={16} />
              Estimated $100k savings from proposed energy efficiency measures
            </li>
            <li className="flex items-center text-purple-500">
              <Globe className="mr-2" size={16} />
              Carbon offset program could improve SDG 13 score by 20%
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Stakeholder Sentiment Analysis</h2>
          <div className="flex items-center justify-between">
            <span>Employees</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
            </div>
            <span className="text-green-600">70%</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span>Investors</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: '60%'}}></div>
            </div>
            <span className="text-yellow-600">60%</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span>Community</span>
            <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{width: '80%'}}></div>
            </div>
            <span className="text-blue-600">80%</span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
            Generate Report
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2">
            Simulate Initiatives
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mr-2">
            Stakeholder Outreach
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            <Settings className="inline-block mr-1" size={16} />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityDashboard;
