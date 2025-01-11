import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  // Sample data - replace with your actual data
  const mockData = [
    { month: 'Jan', income: 4000, expenses: 2400 },
    { month: 'Feb', income: 3000, expenses: 2800 },
    { month: 'Mar', income: 5000, expenses: 3000 },
    { month: 'Apr', income: 4500, expenses: 2300 },
    { month: 'May', income: 4200, expenses: 2900 },
  ];

  const totalIncome = mockData.reduce((sum, item) => sum + item.income, 0);
  const totalExpenses = mockData.reduce((sum, item) => sum + item.expenses, 0);
  const savings = totalIncome - totalExpenses;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Financial Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Income Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-2">Total Income</div>
          <div className="text-2xl font-bold text-green-600">${totalIncome.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Total income this year</div>
        </div>

        {/* Expenses Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-2">Total Expenses</div>
          <div className="text-2xl font-bold text-red-600">${totalExpenses.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Total expenses this year</div>
        </div>

        {/* Savings Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-2">Net Savings</div>
          <div className="text-2xl font-bold text-blue-600">${savings.toLocaleString()}</div>
          <div className="text-xs text-gray-500 mt-1">Total savings this year</div>
        </div>

        {/* Monthly Average Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-600 mb-2">Monthly Average</div>
          <div className="text-2xl font-bold text-purple-600">
            ${Math.round(totalExpenses / mockData.length).toLocaleString()}
          </div>
          <div className="text-xs text-gray-500 mt-1">Average monthly expenses</div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Income vs Expenses Trend</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="income" 
                stroke="#059669" 
                strokeWidth={2}
                name="Income"
              />
              <Line 
                type="monotone" 
                dataKey="expenses" 
                stroke="#DC2626" 
                strokeWidth={2}
                name="Expenses"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;