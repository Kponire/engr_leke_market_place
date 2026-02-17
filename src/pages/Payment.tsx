import { useState } from "react";
import { Card, Table, Button, Select, TextInput, Text } from "@mantine/core";
import { payments } from "../data/dummyData";
import { FiCreditCard, FiSearch, FiDownload, FiFilter } from "react-icons/fi";
const Payment = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>("all");
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || payment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  const totalAmount = filteredPayments.reduce(
    (sum, payment) => sum + payment.amount,
    0,
  );
  const completedPayments = filteredPayments.filter(
    (p) => p.status === "completed",
  );
  const pendingPayments = filteredPayments.filter(
    (p) => p.status === "pending",
  );
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "green";
      case "pending":
        return "yellow";
      case "failed":
        return "red";
      case "refunded":
        return "gray";
      default:
        return "gray";
    }
  };
  const getMethodIcon = () => {
    return <FiCreditCard className="inline mr-1" />;
  };
  return (
    <div className="px-1 sm:px-9 pt-5">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-semibold text-primary-900">
            Payment Management
          </h1>
          <p className="text-gray-600 mt-1">
            Track and manage all transactions
          </p>
        </div>
        <Button
          leftSection={<FiDownload />}
          className="bg-green-600 hover:bg-green-700"
        >
          Export Report
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6" shadow="sm">
          <p className="text-sm text-gray-600 mb-1">Total Processed</p>
          <p className="text-2xl font-bold text-gray-900">
            ${totalAmount.toFixed(2)}
          </p>
          <p className="text-xs text-green-600 mt-1">
            {filteredPayments.length} transactions
          </p>
        </Card>

        <Card className="p-6" shadow="sm">
          <p className="text-sm text-gray-600 mb-1">Completed</p>
          <p className="text-2xl font-bold text-green-600">
            {completedPayments.length}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            $
            {completedPayments.reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
          </p>
        </Card>

        <Card className="p-6" shadow="sm">
          <p className="text-sm text-gray-600 mb-1">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">
            {pendingPayments.length}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            ${pendingPayments.reduce((sum, p) => sum + p.amount, 0).toFixed(2)}
          </p>
        </Card>
      </div>

      <Card className="p-6" shadow="sm">
        <div className="flex gap-4 mb-6">
          <TextInput
            placeholder="Search transactions..."
            leftSection={<FiSearch />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Select
            placeholder="Filter by status"
            leftSection={<FiFilter />}
            value={statusFilter}
            onChange={setStatusFilter}
            data={[
              { value: "all", label: "All Status" },
              { value: "completed", label: "Completed" },
              { value: "pending", label: "Pending" },
              { value: "failed", label: "Failed" },
              { value: "refunded", label: "Refunded" },
            ]}
            className="w-48"
          />
        </div>
        <Table.ScrollContainer minWidth={500}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Transaction ID</Table.Th>
                <Table.Th>Customer</Table.Th>
                <Table.Th>Order Number</Table.Th>
                <Table.Th>Amount</Table.Th>
                <Table.Th>Method</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {filteredPayments.map((payment) => (
                <Table.Tr key={payment.id}>
                  <Table.Td className="font-medium">
                    {payment.transactionId}
                  </Table.Td>
                  <Table.Td>{payment.customer}</Table.Td>
                  <Table.Td>{payment.orderNumber}</Table.Td>
                  <Table.Td className="font-semibold text-gray-900">
                    ${payment.amount.toFixed(2)}
                  </Table.Td>
                  <Table.Td>
                    {getMethodIcon()}
                    <span className="capitalize">
                      {payment.method.replace("_", " ")}
                    </span>
                  </Table.Td>
                  <Table.Td>
                    {new Date(payment.date).toLocaleDateString()}
                  </Table.Td>
                  <Table.Td>
                    <Text fw={500} c={getStatusColor(payment.status)}>
                      {payment.status}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Button variant="subtle" size="xs">
                      View
                    </Button>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Card>
    </div>
  );
};
export default Payment;
