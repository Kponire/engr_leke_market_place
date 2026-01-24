import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import DashboardMainLayout from "./components/Layout/DashboardMainLayout";
import Dashboard from "./pages/Dashboard";
// import Store from "./pages/Store";
import Reporting from "./pages/Reporting";
import Inventory from "./pages/Inventory";
import Payment from "./pages/Payment";
import Support from "./pages/Support";
import { FullLayout } from "./components/Layout/DashboardLayout";
import AriseAndShinePage from "./pages/NewStore";
import PublishProductPage from "./pages/PublishProductPage";

const router = createBrowserRouter([
  {
    path: "/dashboard/",
    element: <FullLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "store",
        element: <AriseAndShinePage />,
      },
      {
        path: "store/publish",
        element: <PublishProductPage />,
      },
      {
        path: "reporting",
        element: <Reporting />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
