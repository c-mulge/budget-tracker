import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Home';
import AboutUs from './components/About';
import BudgetList from './components/BudgetList';
import BudgetForm from './components/BudgetForm';

const App = () => {
  const [budgets, setBudgets] = useState([]);

  const handleAddBudget = (budgetItem) => {
    setBudgets([...budgets, budgetItem]);
  };

  const handleDeleteBudget = (index) => {
    setBudgets(budgets.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <HomePage />
        <AboutUs />
        <BudgetList budgets={budgets} onDelete={handleDeleteBudget} />
        <BudgetForm onSubmit={handleAddBudget} />
      </main>
      <Footer />
    </div>
  );
};

export default App;