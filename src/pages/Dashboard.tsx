import { Grid } from "@mantine/core";
import StatCard from "../components/Dashboard/StatCard";
import ActivityCard from "../components/Dashboard/ActivityCard";
import { dashboardStats, activityItems } from "../data/dummyData";
import {
  FiShoppingCart,
  FiTrendingUp,
  FiXCircle,
  FiShoppingBag,
} from "react-icons/fi";
import { Button } from "@mantine/core";

const Dashboard = () => {
  return (
    <div className="px-9 pt-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-primary-900">
          Explore your business
        </h1>
      </div>

      <Grid gutter="md" className="mb-8">
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Total sales"
            value={dashboardStats.totalSales.toLocaleString()}
            subtitle="Total number of sales made"
            icon={<FiTrendingUp />}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Orders"
            value={dashboardStats.activeOrders}
            subtitle="Total number of active orders"
            icon={<FiShoppingCart />}
            highlighted={"bg-[#4F4F4F]"}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Canceled"
            value={dashboardStats.canceledOrders.toString().padStart(2, "0")}
            subtitle="Number of canceled orders"
            icon={<FiXCircle />}
            highlighted="bg-[#828282]"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <StatCard
            title="Cart"
            value={dashboardStats.cartItems}
            subtitle="No of products added to cart"
            icon={<FiShoppingBag />}
            highlighted="bg-[#BDBDBD]"
          />
        </Grid.Col>
      </Grid>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-primary-900 mb-4">
          Recent Activity
        </h2>
        <Grid gutter="md" style={{ background: "#F5F5F5" }}>
          {activityItems.slice(0, 6).map((item) => (
            <Grid.Col key={item.id} span={{ base: 12, sm: 6 }}>
              <ActivityCard item={item} />
            </Grid.Col>
          ))}
        </Grid>
      </div>

      <div className="flex justify-center">
        <Button color={"bright-green.9"} w={"252px"} h={"41px"} radius={"8px"}>
          View More
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
