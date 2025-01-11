import React from 'react';
import { DollarSign, PieChart, TrendingUp, Shield } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-500" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HomePage = () => (
  <div className="pt-16">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Take Control of Your Financial Future
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Track expenses, analyze spending patterns, and achieve your financial goals
            with our powerful budgeting tools.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Start Budgeting
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose BudgetPro?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          icon={DollarSign}
          title="Easy Tracking"
          description="Effortlessly track your daily expenses and income with our intuitive interface."
        />
        <FeatureCard 
          icon={PieChart}
          title="Smart Analytics"
          description="Get detailed insights into your spending patterns with visual reports."
        />
        <FeatureCard 
          icon={TrendingUp}
          title="Goal Setting"
          description="Set and track financial goals with our intelligent goal-tracking system."
        />
        <FeatureCard 
          icon={Shield}
          title="Secure Data"
          description="Your financial data is protected with bank-grade security measures."
        />
      </div>
    </div>

    {/* Stats Section */}
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">1+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
            <div className="text-gray-600">Expenses Tracked</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">User Rating</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;