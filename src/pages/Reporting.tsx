import { Card, Grid, Table, Badge, Text } from "@mantine/core";
import { orders } from "../data/dummyData";
import {
  FiTrendingUp,
  FiDollarSign,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

const Reporting = () => {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const completedOrders = orders.filter((o) => o.status === "completed").length;
  const averageOrderValue = totalRevenue / orders.length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "green";
      case "processing":
        return "blue";
      case "pending":
        return "yellow";
      case "canceled":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-primary-900">
          Reporting & Analytics
        </h1>
        <p className="text-gray-600 mt-1">
          Overview of your business performance
        </p>
      </div>

      <Grid gutter="md" className="mb-8">
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card className="p-6" shadow="sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${totalRevenue.toFixed(2)}
                </p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <FiDollarSign className="text-primary-900 text-xl" />
              </div>
            </div>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card className="p-6" shadow="sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orders.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <FiShoppingCart className="text-primary-900 text-xl" />
              </div>
            </div>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card className="p-6" shadow="sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {completedOrders}
                </p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <FiTrendingUp className="text-primary-900 text-xl" />
              </div>
            </div>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card className="p-6" shadow="sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg Order Value</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${averageOrderValue.toFixed(2)}
                </p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <FiUsers className="text-primary-900 text-xl" />
              </div>
            </div>
          </Card>
        </Grid.Col>
      </Grid>

      <Card className="p-6" shadow="sm">
        <h2 className="text-xl font-semibold text-primary-900 mb-4">
          Recent Orders
        </h2>
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Order Number</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Date</Table.Th>
              <Table.Th>Items</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {orders.map((order) => (
              <Table.Tr key={order.id}>
                <Table.Td className="font-medium">{order.orderNumber}</Table.Td>
                <Table.Td>{order.customer}</Table.Td>
                <Table.Td>{new Date(order.date).toLocaleDateString()}</Table.Td>
                <Table.Td>{order.items}</Table.Td>
                <Table.Td className="font-semibold">
                  ${order.total.toFixed(2)}
                </Table.Td>
                <Table.Td>
                  <Text fw={700} c={getStatusColor(order.status)}>
                    {order.status}
                  </Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>
    </div>
  );
};

export default Reporting;
