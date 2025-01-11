import React, { useState } from 'react';
import { PlusCircle, DollarSign, Tag, FileText } from 'lucide-react';

const InputGroup = ({ icon: Icon, label, children }) => (
  <div className="relative">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-gray-400" />
      </div>
      {children}
    </div>
  </div>
);

const BudgetForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
    type: 'expense'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      description: '',
      amount: '',
      category: '',
      type: 'expense'
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Add New Transaction</h2>
          <div className="flex gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors ${
              formData.type === 'expense' 
                ? 'bg-red-100 text-red-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-red-50'
            }`}
            onClick={() => setFormData({...formData, type: 'expense'})}>
              Expense
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors ${
              formData.type === 'income' 
                ? 'bg-green-100 text-green-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-green-50'
            }`}
            onClick={() => setFormData({...formData, type: 'income'})}>
              Income
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputGroup icon={FileText} label="Description">
            <input
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="pl-10 w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              placeholder="Enter description"
              required
            />
          </InputGroup>

          <InputGroup icon={DollarSign} label="Amount">
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              className="pl-10 w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              placeholder="0.00"
              min="0"
              step="0.01"
              required
            />
          </InputGroup>

          <InputGroup icon={Tag} label="Category">
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="pl-10 w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none"
              required
            >
              <option value="">Select a category</option>
              <option value="food">Food & Dining</option>
              <option value="transportation">Transportation</option>
              <option value="utilities">Utilities</option>
              <option value="entertainment">Entertainment</option>
              <option value="shopping">Shopping</option>
              <option value="health">Health</option>
              <option value="other">Other</option>
            </select>
          </InputGroup>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors"
          >
            <PlusCircle className="h-5 w-5" />
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default BudgetForm;