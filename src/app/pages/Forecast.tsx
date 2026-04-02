import { TrendingUp, AlertTriangle, Target, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const balanceData = [
  { month: "Apr", balance: 45200 },
  { month: "May", balance: 48500 },
  { month: "Jun", balance: 51800 },
  { month: "Jul", balance: 54200 },
  { month: "Aug", balance: 57100 },
  { month: "Sep", balance: 59800 },
];

const spendingTrendData = [
  { month: "Nov", spending: 32000 },
  { month: "Dec", spending: 35000 },
  { month: "Jan", spending: 31000 },
  { month: "Feb", spending: 33500 },
  { month: "Mar", spending: 36000 },
  { month: "Apr", spending: 39900 },
];

export function Forecast() {
  return (
    <div className="p-6 lg:p-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Forecast</h1>
        <p className="text-gray-600">Predict your financial future based on current trends</p>
      </div>

      {/* Prediction Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Month-End Balance */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="px-3 py-1 bg-emerald-100 rounded-full">
              <span className="text-xs font-medium text-emerald-700">Good</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Month-End Prediction</h3>
          <div className="text-3xl font-bold text-emerald-900 mb-2">₦48,500</div>
          <p className="text-sm text-gray-700">
            You may end this month with a positive balance based on your current spending rate.
          </p>
        </div>

        {/* Run Out Warning */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div className="px-3 py-1 bg-amber-100 rounded-full">
              <span className="text-xs font-medium text-amber-700">Warning</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Budget Alert</h3>
          <div className="text-3xl font-bold text-amber-900 mb-2">15 days</div>
          <p className="text-sm text-gray-700">
            If you continue your current spending pace, you may exceed your budget in 15 days.
          </p>
        </div>

        {/* Goal Achievement */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="px-3 py-1 bg-indigo-100 rounded-full">
              <span className="text-xs font-medium text-indigo-700">On Track</span>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Laptop Goal</h3>
          <div className="text-3xl font-bold text-indigo-900 mb-2">3 months</div>
          <p className="text-sm text-gray-700">
            Your New Laptop goal is achievable in 3 months at your current savings rate.
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Future Balance Chart */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-1">Projected Balance</h3>
            <p className="text-sm text-gray-600">Your estimated balance over the next 6 months</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={balanceData}>
              <defs>
                <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "8px 12px",
                }}
                formatter={(value) => `₦${value}`}
              />
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#10B981"
                strokeWidth={2}
                fill="url(#balanceGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Spending Trend Chart */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-1">Spending Trend</h3>
            <p className="text-sm text-gray-600">Monthly spending over the last 6 months</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={spendingTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "12px",
                  padding: "8px 12px",
                }}
                formatter={(value) => `₦${value}`}
              />
              <Line
                type="monotone"
                dataKey="spending"
                stroke="#4F46E5"
                strokeWidth={2}
                dot={{ fill: "#4F46E5", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-6">Financial Insights & Recommendations</h3>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Positive Savings Trend</h4>
              <p className="text-sm text-gray-600">
                Your savings rate has improved by 12% compared to last month. Keep up the great work! 
                If you maintain this trend, you'll have an extra ₦15,000 saved by the end of the quarter.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Rising Food Costs</h4>
              <p className="text-sm text-gray-600">
                Your food expenses have increased 8% month-over-month. This trend could cost you an 
                extra ₦24,000 by year-end. Consider meal planning to reverse this trend.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Goal Achievement Forecast</h4>
              <p className="text-sm text-gray-600">
                Based on current patterns, you'll reach your Emergency Fund goal by October 2026, 
                2 months ahead of schedule. Your New Laptop goal is also on track for completion by August.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Seasonal Spending Pattern</h4>
              <p className="text-sm text-gray-600">
                Historical data shows you tend to spend 15% more during holiday months. Start saving 
                an extra ₦5,000/month now to prepare for December expenses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
