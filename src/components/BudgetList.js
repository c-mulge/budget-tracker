import React, { useState } from 'react';
import { Trash2, TrendingUp, TrendingDown, Filter, Calendar } from 'lucide-react';

const BudgetList = ({ budgets, onDelete }) => {
  const [filter, setFilter] = useState('all');
  
  const totalIncome = budgets
    .filter(budget => budget.type === 'income')
    .reduce((sum, budget) => sum + Number(budget.amount), 0);

  const totalExpense = budgets
    .filter(budget => budget.type === 'expense')
    .reduce((sum, budget) => sum + Number(budget.amount), 0);

  const balance = totalIncome - totalExpense;

  const filteredBudgets = budgets.filter(budget => {
    if (filter === 'income') return budget.type === 'income';
    if (filter === 'expense') return budget.type === 'expense';
    return true;
  });

  const getCategoryColor = (category) => {
    const colors = {
      food: 'bg-orange-100 text-orange-800',
      transportation: 'bg-blue-100 text-blue-800',
      utilities: 'bg-purple-100 text-purple-800',
      entertainment: 'bg-pink-100 text-pink-800',
      shopping: 'bg-yellow-100 text-yellow-800',
      health: 'bg-green-100 text-green-800',
      other: 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors.other;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <div className="text-sm text-gray-600 mb-2">Total Balance</div>
          <div className={`text-2xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${balance.toFixed(2)}
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Updated just now
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-2">Total Income</div>
              <div className="text-2xl font-bold text-green-600">${totalIncome.toFixed(2)}</div>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-2">Total Expenses</div>
              <div className="text-2xl font-bold text-red-600">${totalExpense.toFixed(2)}</div>
            </div>
            <TrendingDown className="h-8 w-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700 font-medium">Filter Transactions:</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('income')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'income' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Income
            </button>
            <button
              onClick={() => setFilter('expense')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'expense' 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Expenses
            </button>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {filteredBudgets.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No transactions found</h3>
            <p className="text-gray-500">Add some transactions to get started!</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {filteredBudgets.map((budget, index) => (
              <li 
                key={index} 
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      budget.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {budget.type === 'income' ? (
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{budget.description}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(budget.category)}`}>
                          {budget.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date().toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-lg font-medium ${
                      budget.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {budget.type === 'income' ? '+' : '-'}${budget.amount}
                    </span>
                    <button
                      onClick={() => onDelete(index)}
                      className="p-2 hover:bg-red-100 rounded-full transition-colors group"
                    >
                      <Trash2 className="h-5 w-5 text-gray-400 group-hover:text-red-500" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BudgetList;