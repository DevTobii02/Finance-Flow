import { useState } from "react";
import { useNavigate } from "react-router";
import { TrendingUp, DollarSign, ShoppingBag, Car, Home, Zap, Coffee, MoreHorizontal, Target, Calendar, CheckCircle } from "lucide-react";

const categories = [
  { id: "food", label: "Food", icon: Coffee },
  { id: "transport", label: "Transport", icon: Car },
  { id: "bills", label: "Bills", icon: Home },
  { id: "fun", label: "Fun", icon: Zap },
  { id: "subscriptions", label: "Subscriptions", icon: ShoppingBag },
  { id: "others", label: "Others", icon: MoreHorizontal },
];

export function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [income, setIncome] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [goalDeadline, setGoalDeadline] = useState("");

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete onboarding
      navigate("/app");
    }
  };

  const canProceed = () => {
    if (step === 1) return income !== "";
    if (step === 2) return selectedCategories.length > 0;
    if (step === 3) return goalName !== "" && goalAmount !== "" && goalDeadline !== "";
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold">Finance Flow</span>
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                    num === step
                      ? "bg-indigo-600 text-white"
                      : num < step
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {num < step ? <CheckCircle className="w-5 h-5" /> : num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-16 h-1 ${
                      num < step ? "bg-emerald-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">How much do you earn monthly?</h2>
                <p className="text-gray-600">This helps us understand your financial situation</p>
              </div>
              
              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Income
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">₦</span>
                  <input
                    id="income"
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    placeholder="50,000"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">What do you usually spend on?</h2>
                <p className="text-gray-600">Select all that apply</p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isSelected = selectedCategories.includes(category.id);
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => toggleCategory(category.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        isSelected
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${
                        isSelected ? "text-indigo-600" : "text-gray-400"
                      }`} />
                      <div className={`text-sm font-medium ${
                        isSelected ? "text-indigo-900" : "text-gray-700"
                      }`}>
                        {category.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Set your first savings goal</h2>
                <p className="text-gray-600">What are you saving for?</p>
              </div>
              
              <div>
                <label htmlFor="goalName" className="block text-sm font-medium text-gray-700 mb-2">
                  Goal Name
                </label>
                <div className="relative">
                  <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="goalName"
                    type="text"
                    value={goalName}
                    onChange={(e) => setGoalName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    placeholder="New Laptop"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="goalAmount" className="block text-sm font-medium text-gray-700 mb-2">
                  Target Amount
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <span className="absolute left-9 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                  <input
                    id="goalAmount"
                    type="number"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(e.target.value)}
                    className="w-full pl-14 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    placeholder="150,000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="goalDeadline" className="block text-sm font-medium text-gray-700 mb-2">
                  Target Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="goalDeadline"
                    type="date"
                    value={goalDeadline}
                    onChange={(e) => setGoalDeadline(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex-1 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 3 ? "Finish Setup" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
