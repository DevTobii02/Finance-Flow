import { useEffect, useState } from "react";
import { Wallet, TrendingDown, PiggyBank, DollarSign, Sparkles, Target, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router";
import { getCurrencySymbol, getStoredCurrency } from "../utils/currency";

const spendingData = [
  { name: "Mon", amount: 2400 },
  { name: "Tue", amount: 1398 },
  { name: "Wed", amount: 9800 },
  { name: "Thu", amount: 3908 },
  { name: "Fri", amount: 4800 },
  { name: "Sat", amount: 3800 },
  { name: "Sun", amount: 4300 },
];

export function Dashboard() {
  const [currencyCode, setCurrencyCode] = useState("NGN");
  const [currencySymbol, setCurrencySymbol] = useState("₦");

  useEffect(() => {
    const stored = getStoredCurrency();
    setCurrencyCode(stored);
    setCurrencySymbol(getCurrencySymbol(stored));
  }, []);

  return (
    <div className="p-6 lg:p-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
        <p className="text-gray-600">Here's your financial overview for April 2026</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Current Balance</div>
          <div className="text-2xl font-bold text-gray-900">{currencySymbol + (45200).toLocaleString()}</div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Monthly Spending</div>
          <div className="text-2xl font-bold text-gray-900">{currencySymbol + (28400).toLocaleString()}</div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <PiggyBank className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Monthly Savings</div>
          <div className="text-2xl font-bold text-gray-900">{currencySymbol + (12800).toLocaleString()}</div>
        </div>

        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Safe-to-Spend Today</div>
          <div className="text-2xl font-bold text-gray-900">{currencySymbol + (4500).toLocaleString()}</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Spending Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Weekly Spending</h3>
              <p className="text-sm text-gray-600">Your spending over the last 7 days</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={spendingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "8px 12px",
                }}
                formatter={(value) => `${currencySymbol}${value}`}
              />
              <Bar dataKey="amount" fill="#4F46E5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Savings Goal Progress */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <Link to="/app/goals" className="text-sm text-emerald-700 hover:text-emerald-800 font-medium">
                View all
              </Link>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">New Laptop</h3>
            <div className="mb-3">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium text-emerald-700">67%</span>
              </div>
              <div className="h-3 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{ width: "67%" }} />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{currencySymbol + (100500).toLocaleString()} saved</span>
              <span className="text-gray-600">of {currencySymbol + (150000).toLocaleString()}</span>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900">AI Insight</h3>
            </div>
            <p className="text-gray-700 mb-4">
              You spent 18% more on food this week. Consider reducing takeout to stay on track.
            </p>
            <Link
              to="/app/ai-assistant"
              className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800"
            >
              Get more advice
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-2xl p-6 border shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            to="/app/expenses"
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
          >
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Add Expense</div>
              <div className="text-sm text-gray-600">Track spending</div>
            </div>
          </Link>
          <Link
            to="/app/goals"
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all"
          >
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Create Goal</div>
              <div className="text-sm text-gray-600">Save for something</div>
            </div>
          </Link>
          <Link
            to="/app/ai-assistant"
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all"
          >
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">Ask AI</div>
              <div className="text-sm text-gray-600">Get advice</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
