import { useState } from "react";
import { Card, Button, Badge, TextInput, Select } from "@mantine/core";
import { products } from "../data/dummyData";
import { FiSearch, FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";

const Store = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "green";
      case "inactive":
        return "gray";
      case "out_of_stock":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">My Store</h1>
        <Button
          leftSection={<FiPlus />}
          className="bg-green-600 hover:bg-green-700"
        >
          Add Product
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <TextInput
          placeholder="Search products..."
          leftSection={<FiSearch />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <Select
          placeholder="Category"
          value={categoryFilter}
          onChange={setCategoryFilter}
          data={[
            { value: "all", label: "All Categories" },
            { value: "Electronics", label: "Electronics" },
            { value: "Accessories", label: "Accessories" },
          ]}
          className="w-48"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            shadow="sm"
            padding="lg"
            className="hover:shadow-md transition-shadow"
          >
            <Card.Section>
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card.Section>

            <div className="mt-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-lg text-gray-900">
                  {product.name}
                </h3>
                <Badge color={getStatusColor(product.status)} size="sm">
                  {product.status.replace("_", " ")}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">
                  Stock: {product.stock}
                </span>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  leftSection={<FiEdit2 />}
                >
                  Edit
                </Button>
                <Button
                  variant="light"
                  color="red"
                  fullWidth
                  leftSection={<FiTrash2 />}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Store;
