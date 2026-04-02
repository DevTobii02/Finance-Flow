import { useEffect, useState } from "react";
import { Plus, Target, Calendar, DollarSign, Sparkles, TrendingUp, Trash } from "lucide-react";

const goals = [
  {
    id: 1,
    name: "New Laptop",
    saved: 100500,
    target: 150000,
    deadline: "2026-08-15",
    color: "indigo",
    currency: "₦",
  },
  {
    id: 2,
    name: "Emergency Fund",
    saved: 45000,
    target: 100000,
    deadline: "2026-12-31",
    color: "emerald",
    currency: "₦",
  },
  {
    id: 3,
    name: "Vacation Trip",
    saved: 28000,
    target: 80000,
    deadline: "2026-07-01",
    color: "amber",
    currency: "₦",
  },
];

const colorClasses: Record<string, any> = {
  indigo: {
    bg: "from-indigo-50 to-indigo-100",
    border: "border-indigo-200",
    progress: "from-indigo-500 to-purple-600",
    text: "text-indigo-700",
    icon: "bg-indigo-600",
  },
  emerald: {
    bg: "from-emerald-50 to-emerald-100",
    border: "border-emerald-200",
    progress: "from-emerald-500 to-teal-600",
    text: "text-emerald-700",
    icon: "bg-emerald-600",
  },
  amber: {
    bg: "from-amber-50 to-amber-100",
    border: "border-amber-200",
    progress: "from-amber-500 to-orange-600",
    text: "text-amber-700",
    icon: "bg-amber-600",
  },
};

export function Goals() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<number | null>(null);
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [goalDeadline, setGoalDeadline] = useState("");
  const [goalCurrency, setGoalCurrency] = useState("₦");
  const [goalList, setGoalList] = useState(goals);

  useEffect(() => {
    const stored = localStorage.getItem("finance-flow-currency");
    if (stored === "USD") {
      setGoalCurrency("$");
    } else if (stored === "GBP") {
      setGoalCurrency("£");
    } else if (stored === "EUR") {
      setGoalCurrency("€");
    } else {
      setGoalCurrency("₦");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGoal = {
      id: goalList.length ? Math.max(...goalList.map((goal) => goal.id)) + 1 : 1,
      name: goalName,
      saved: 0,
      target: Number(goalAmount),
      deadline: goalDeadline,
      color: ["indigo", "emerald", "amber"][goalList.length % 3],
      currency: goalCurrency,
    };
    setGoalList((prev) => [...prev, newGoal]);
    setShowModal(false);
    setGoalName("");
    setGoalAmount("");
    setGoalDeadline("");
  };

  const handleDelete = (goalId: number) => {
    setGoalList((prev) => prev.filter((goal) => goal.id !== goalId));
    if (selectedGoal === goalId) {
      setSelectedGoal(null);
    }
  };

  const selectedGoalObj = selectedGoal ? goalList.find((goal) => goal.id === selectedGoal) : null;

  const getProgress = (saved: number, target: number) => {
    return Math.round((saved / target) * 100);
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const end = new Date(deadline);
    const diff = end.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Savings Goals</h1>
          <p className="text-gray-600">Track your progress toward financial milestones</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create New Goal
        </button>
      </div>

      {/* Goals Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {goalList.map((goal) => {
          const progress = getProgress(goal.saved, goal.target);
          const daysLeft = getDaysRemaining(goal.deadline);
          const colors = colorClasses[goal.color];

          return (
            <div
              key={goal.id}
              className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border ${colors.border} cursor-pointer hover:shadow-lg transition-shadow`}
              onClick={() => setSelectedGoal(goal.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center`}>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <div className={`px-3 py-1 bg-white rounded-full text-xs font-medium ${colors.text}`}>
                    {progress}%
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(goal.id);
                    }}
                    className="p-2 rounded-full bg-white/90 text-gray-500 hover:text-red-600 hover:bg-white"
                    aria-label={`Delete ${goal.name}`}
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">{goal.name}</h3>

              <div className="mb-4">
                <div className="h-3 bg-white rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full bg-gradient-to-r ${colors.progress} rounded-full transition-all`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <span>{goal.currency}{goal.saved.toLocaleString()}</span>
                  <span>{goal.currency}{goal.target.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/50">
                <div className="flex items-center gap-1 text-sm text-gray-700">
                  <Calendar className="w-4 h-4" />
                  <span>{daysLeft} days left</span>
                </div>
                <div className={`text-sm font-medium ${colors.text}`}>
                  {goal.currency}{(goal.target - goal.saved).toLocaleString()} to go
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Goal Details */}
      {selectedGoalObj && (
        <div className="bg-white rounded-2xl p-6 lg:p-8 border shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedGoalObj.name}
              </h2>
              <p className="text-gray-600">Goal details and recommendations</p>
            </div>
            <button
              onClick={() => setSelectedGoal(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-indigo-50 rounded-xl p-4">
              <div className="text-sm text-indigo-600 mb-1">Total Saved</div>
              <div className="text-2xl font-bold text-indigo-900">
                {selectedGoalObj.currency}{selectedGoalObj.saved.toLocaleString()}
              </div>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4">
              <div className="text-sm text-emerald-600 mb-1">Target Amount</div>
              <div className="text-2xl font-bold text-emerald-900">
                {selectedGoalObj.currency}{selectedGoalObj.target.toLocaleString()}
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4">
              <div className="text-sm text-amber-600 mb-1">Remaining</div>
              <div className="text-2xl font-bold text-amber-900">
                {selectedGoalObj.currency}{(selectedGoalObj.target - selectedGoalObj.saved).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Recommendation</h3>
                <p className="text-gray-700 mb-3">
                  To reach your goal on time, save <strong>{selectedGoalObj.currency}12,500 per week</strong>. Based on your
                  current spending patterns, this is achievable if you reduce dining out by 30%.
                </p>
                <div className="flex items-center gap-2 text-sm text-purple-700">
                  <TrendingUp className="w-4 h-4" />
                  <span>You're on track to complete this 2 weeks early!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Goal Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Create New Goal</h3>
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
                  Goal Name
                </label>
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={goalName}
                    onChange={(e) => setGoalName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    placeholder="New Phone"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <span className="absolute left-9 top-1/2 -translate-y-1/2 text-gray-500">{goalCurrency}</span>
                  <input
                    type="number"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(e.target.value)}
                    className="w-full pl-14 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    placeholder="100,000"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <select
                  value={goalCurrency}
                  onChange={(e) => setGoalCurrency(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                >
                  <option value="₦">₦</option>
                  <option value="$">$</option>
                  <option value="£">£</option>
                  <option value="€">€</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={goalDeadline}
                    onChange={(e) => setGoalDeadline(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    required
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
                  Create Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
