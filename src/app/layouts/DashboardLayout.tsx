import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { LayoutDashboard, Receipt, Target, TrendingUp, Sparkles, Settings, Menu, X, LogOut, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Dashboard", path: "/app", icon: LayoutDashboard },
  { name: "Expenses", path: "/app/expenses", icon: Receipt },
  { name: "Goals", path: "/app/goals", icon: Target },
  { name: "Forecast", path: "/app/forecast", icon: TrendingUp },
  { name: "AI Assistant", path: "/app/ai-assistant", icon: Sparkles },
  { name: "Settings", path: "/app/settings", icon: Settings },
];

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const handleLogout = () => {
    navigate("/login");
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("finance-flow-theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setThemeMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("finance-flow-theme", themeMode);
  }, [themeMode]);

  const isActive = (path: string) => {
    if (path === "/app") {
      return location.pathname === "/app";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-card border-b border-border z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold">Finance Flow</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-card border-r border-border z-40 transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b hidden lg:block">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold">Finance Flow</span>
          </div>
        </div>

        <nav className="p-4 space-y-2 mt-16 lg:mt-0">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  active
                    ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">John Doe</div>
              <div className="text-xs text-gray-500">john@example.com</div>
            </div>
          </div>
          <div className="mb-4 px-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400 mb-3">
              Theme
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setThemeMode("light")}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  themeMode === "light"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700"
                }`}
              >
                <Sun className="w-4 h-4" />
                Light
              </button>
              <button
                type="button"
                onClick={() => setThemeMode("dark")}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  themeMode === "dark"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-200 dark:hover:bg-slate-700"
                }`}
              >
                <Moon className="w-4 h-4" />
                Dark
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white px-2 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 w-full"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm">Log out</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
