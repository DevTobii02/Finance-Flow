import { useState } from "react";
import { Plus, Coffee, Car, Home, Zap, ShoppingBag, MoreHorizontal, Calendar, Receipt } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const categoryIcons: Record<string, any> = {
  Food: Coffee,
  Transport: Car,
  Bills: Home,
  Fun: Zap,
  Subscriptions: ShoppingBag,
  Others: MoreHorizontal,
};

const expenses = [
  { id: 1, date: "2026-04-01", category: "Food", note: "Lunch at cafeteria", amount: 2500 },
  { id: 2, date: "2026-04-01", category: "Transport", note: "Uber to work", amount: 1500 },
  { id: 3, date: "2026-04-02", category: "Bills", note: "Internet subscription", amount: 8000 },
  { id: 4, date: "2026-04-02", category: "Food", note: "Groceries", amount: 12000 },
  { id: 5, date: "2026-04-03", category: "Fun", note: "Movie night", amount: 3500 },
  { id: 6, date: "2026-04-03", category: "Transport", note: "Fuel", amount: 5000 },
  { id: 7, date: "2026-04-04", category: "Subscriptions", note: "Netflix", amount: 2900 },
  { id: 8, date: "2026-04-04", category: "Food", note: "Dinner", amount: 4500 },
];

const categoryData = [
  { name: "Food", value: 19000, color: "#4F46E5" },
  { name: "Transport", value: 6500, color: "#10B981" },
  { name: "Bills", value: 8000, color: "#F59E0B" },
  { name: "Fun", value: 3500, color: "#EF4444" },
  { name: "Subscriptions", value: 2900, color: "#8B5CF6" },
];

export function Expenses() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [note, setNote] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit
    setShowModal(false);
    setAmount("");
    setNote("");
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Expenses</h1>
          <p className="text-gray-600">Keep tabs on where your money goes</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Expense
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Expense List */}
        <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-gray-900">Recent Expenses</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Note
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {expenses.map((expense) => {
                  const Icon = categoryIcons[expense.category];
                  return (
                    <tr key={expense.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(expense.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-900">{expense.category}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {expense.note}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                        ₦{expense.amount.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-2xl p-6 border shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-6">Monthly Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `₦${value}`} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-6 space-y-3">
            {categoryData.map((category) => {
              const Icon = categoryIcons[category.name];
              return (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <Icon className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{category.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    ₦{category.value.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900">Total</span>
              <span className="text-lg font-bold text-gray-900">₦39,900</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add Expense Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Add Expense</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    placeholder="5,000"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                >
                  {Object.keys(categoryIcons).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Note
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  placeholder="What did you buy?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  Add Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
