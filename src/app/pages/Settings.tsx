import { useEffect, useState } from "react";
import { User, Mail, Lock, Bell, Globe, LogOut, Save } from "lucide-react";

import { currencyOptions, getStoredCurrency, setStoredCurrency } from "../utils/currency";

export function Settings() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [currency, setCurrency] = useState("NGN");
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [budgetAlerts, setBudgetAlerts] = useState(true);

  useEffect(() => {
    const stored = getStoredCurrency();
    setCurrency(stored);
  }, []);

  const handleSave = () => {
    setStoredCurrency(currency);
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-2xl border shadow-sm">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-gray-900">Profile Information</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Currency Settings */}
        <div className="bg-white rounded-2xl border shadow-sm">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-gray-900">Currency</h3>
          </div>
          <div className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Currency
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white appearance-none"
              >
                {currencyOptions.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.symbol} {option.label} ({option.code})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl border shadow-sm">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-gray-900">Notifications</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">Push Notifications</div>
                  <div className="text-sm text-gray-600">Receive notifications in your browser</div>
                </div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  notifications ? "bg-indigo-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">Email Notifications</div>
                  <div className="text-sm text-gray-600">Receive weekly summaries via email</div>
                </div>
              </div>
              <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  emailNotifications ? "bg-indigo-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    emailNotifications ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">Budget Alerts</div>
                  <div className="text-sm text-gray-600">Get notified when you're overspending</div>
                </div>
              </div>
              <button
                onClick={() => setBudgetAlerts(!budgetAlerts)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  budgetAlerts ? "bg-indigo-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    budgetAlerts ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-2xl border shadow-sm">
          <div className="p-6 border-b">
            <h3 className="font-semibold text-gray-900">Security</h3>
          </div>
          <div className="p-6">
            <button className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
              <Lock className="w-5 h-5" />
              <div className="text-left">
                <div className="font-medium">Change Password</div>
                <div className="text-sm text-gray-600">Update your password regularly</div>
              </div>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-gray-400 transition-colors">
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 rounded-2xl border border-red-200 p-6">
          <h3 className="font-semibold text-red-900 mb-2">Danger Zone</h3>
          <p className="text-sm text-red-700 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
