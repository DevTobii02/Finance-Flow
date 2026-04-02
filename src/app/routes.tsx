import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Onboarding } from "./pages/Onboarding";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { Expenses } from "./pages/Expenses";
import { Goals } from "./pages/Goals";
import { Forecast } from "./pages/Forecast";
import { AIAssistant } from "./pages/AIAssistant";
import { Settings } from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/app",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "expenses", Component: Expenses },
      { path: "goals", Component: Goals },
      { path: "forecast", Component: Forecast },
      { path: "ai-assistant", Component: AIAssistant },
      { path: "settings", Component: Settings },
    ],
  },
]);
