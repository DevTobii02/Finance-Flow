import { Link } from "react-router";
import { TrendingUp, Target, Sparkles, BarChart3, AlertCircle, Calendar, Zap, CheckCircle, ArrowRight, Twitter, Linkedin, Github } from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold">Finance Flow</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="px-4 py-2 text-gray-600 hover:text-gray-900">
              Log in
            </Link>
            <Link 
              to="/signup" 
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Meet your AI Financial Coach
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Track spending, get smart advice, and build saving habits that stick.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/signup"
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors text-center flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors">
                  See How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900">Your Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl">
                    <div className="text-sm text-indigo-600 mb-1">Balance</div>
                    <div className="text-2xl font-bold text-indigo-900">₦45,200</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl">
                    <div className="text-sm text-emerald-600 mb-1">Saved</div>
                    <div className="text-2xl font-bold text-emerald-900">₦12,800</div>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex gap-3">
                    <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-amber-900 mb-1">AI Insight</div>
                      <div className="text-sm text-amber-700">
                        You're 18% over budget on food this week. Consider reducing takeout.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Saving money is hard when you don't know where it goes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Irregular income</h3>
              <p className="text-gray-600">
                Money comes in at different times, making it hard to plan ahead
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No budgeting discipline</h3>
              <p className="text-gray-600">
                It's easy to overspend when you're not tracking expenses daily
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">End-of-month panic</h3>
              <p className="text-gray-600">
                Suddenly realizing you've spent too much and have no savings left
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your personal AI finance assistant
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart expense tracking</h3>
              <p className="text-gray-600 text-sm">
                Easily log expenses and see where your money actually goes
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI coaching & budgeting</h3>
              <p className="text-gray-600 text-sm">
                Get personalized advice and real-time guidance from your AI coach
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Goal-based savings</h3>
              <p className="text-gray-600 text-sm">
                Set clear savings goals and track your progress to stay motivated
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Predictive forecasting</h3>
              <p className="text-gray-600 text-sm">
                See where you'll be financially and avoid running out of money
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
          </div>
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Track your money</h3>
                <p className="text-gray-600">
                  Log your income and expenses to see where your money is going. It takes just seconds.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Get AI guidance</h3>
                <p className="text-gray-600">
                  Your AI coach analyzes your spending patterns and gives you personalized advice to save more.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Achieve your goals</h3>
                <p className="text-gray-600">
                  Watch your savings grow as you stick to your budget and reach your financial goals faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start building your savings habit today
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of young Nigerians taking control of their finances
          </p>
          <Link 
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Create Free Account
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-semibold">Finance Flow</span>
              </div>
              <p className="text-sm">
                Your personal AI financial coach for better money habits.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2026 Finance Flow. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
