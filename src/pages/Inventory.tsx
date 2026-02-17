import { useState } from "react";
import { Card, Table, Button, TextInput, Select, Text } from "@mantine/core";
import { inventory } from "../data/dummyData";
import { FiPackage, FiSearch, FiAlertTriangle, FiPlus } from "react-icons/fi";

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>("all");

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const lowStockItems = inventory.filter(
    (i) => i.status === "low_stock",
  ).length;
  const outOfStockItems = inventory.filter(
    (i) => i.status === "out_of_stock",
  ).length;
  const totalItems = inventory.reduce((sum, item) => sum + item.quantity, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in_stock":
        return "green";
      case "low_stock":
        return "yellow";
      case "out_of_stock":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div className="px-1 sm:px-9 pt-5">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-semibold text-primary-900">
            Inventory Management
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor and manage your stock levels
          </p>
        </div>
        <Button
          leftSection={<FiPlus />}
          className="bg-green-600 hover:bg-green-700"
        >
          Add Stock
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="p-6" shadow="sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Items</p>
              <p className="text-2xl font-bold text-gray-900">{totalItems}</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <FiPackage className="text-primary-900 text-xl" />
            </div>
          </div>
        </Card>

        <Card className="p-6" shadow="sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">In Stock</p>
              <p className="text-2xl font-bold text-green-600">
                {inventory.filter((i) => i.status === "in_stock").length}
              </p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <FiPackage className="text-primary-900 text-xl" />
            </div>
          </div>
        </Card>

        <Card className="p-6" shadow="sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Low Stock</p>
              <p className="text-2xl font-bold text-yellow-600">
                {lowStockItems}
              </p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <FiAlertTriangle className="text-primary-900 text-xl" />
            </div>
          </div>
        </Card>

        <Card className="p-6" shadow="sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Out of Stock</p>
              <p className="text-2xl font-bold text-red-600">
                {outOfStockItems}
              </p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <FiAlertTriangle className="text-primary-900 text-xl" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6" shadow="sm">
        <div className="flex gap-4 mb-6">
          <TextInput
            placeholder="Search products or SKU..."
            leftSection={<FiSearch />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Select
            placeholder="Filter by status"
            value={statusFilter}
            onChange={setStatusFilter}
            data={[
              { value: "all", label: "All Status" },
              { value: "in_stock", label: "In Stock" },
              { value: "low_stock", label: "Low Stock" },
              { value: "out_of_stock", label: "Out of Stock" },
            ]}
            className="w-48"
          />
        </div>

        <Table.ScrollContainer minWidth={500}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Product</Table.Th>
                <Table.Th>SKU</Table.Th>
                <Table.Th>Quantity</Table.Th>
                <Table.Th>Reorder Level</Table.Th>
                <Table.Th>Location</Table.Th>
                <Table.Th>Last Restocked</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {filteredInventory.map((item) => (
                <Table.Tr key={item.id}>
                  <Table.Td className="font-medium">{item.product}</Table.Td>
                  <Table.Td>{item.sku}</Table.Td>
                  <Table.Td>
                    <span
                      className={`font-semibold ${
                        item.quantity === 0
                          ? "text-red-600"
                          : item.quantity <= item.reorderLevel
                            ? "text-yellow-600"
                            : "text-green-600"
                      }`}
                    >
                      {item.quantity}
                    </span>
                  </Table.Td>
                  <Table.Td>{item.reorderLevel}</Table.Td>
                  <Table.Td>{item.location}</Table.Td>
                  <Table.Td>
                    {new Date(item.lastRestocked).toLocaleDateString()}
                  </Table.Td>
                  <Table.Td>
                    <Text c={getStatusColor(item.status)}>
                      {item.status.replace("_", " ")}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Button variant="subtle" size="xs">
                      Restock
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

export default Inventory;
