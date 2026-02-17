import { useState } from "react";
import {
  Card,
  Table,
  Button,
  TextInput,
  Select,
  Textarea,
  Modal,
  Text,
} from "@mantine/core";
import { supportTickets } from "../data/dummyData";
import {
  FiHeadphones,
  FiSearch,
  FiPlus,
  FiMessageSquare,
} from "react-icons/fi";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>("all");
  const [priorityFilter, setPriorityFilter] = useState<string | null>("all");
  const [modalOpened, setModalOpened] = useState(false);

  const filteredTickets = supportTickets.filter((ticket) => {
    const matchesSearch =
      ticket.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || ticket.status === statusFilter;
    const matchesPriority =
      priorityFilter === "all" || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const openTickets = supportTickets.filter((t) => t.status === "open").length;
  const inProgressTickets = supportTickets.filter(
    (t) => t.status === "in_progress",
  ).length;
  const urgentTickets = supportTickets.filter(
    (t) => t.priority === "urgent",
  ).length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "blue";
      case "in_progress":
        return "yellow";
      case "resolved":
        return "green";
      case "closed":
        return "gray";
      default:
        return "gray";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "red";
      case "high":
        return "orange";
      case "medium":
        return "yellow";
      case "low":
        return "blue";
      default:
        return "gray";
    }
  };

  return (
    <div className="px-1 sm:px-9 pt-5">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl font-semibold text-primary-900">
            Customer Support
          </h1>
          <p className="text-gray-600 mt-1">
            Manage and respond to customer tickets
          </p>
        </div>
        <Button
          leftSection={<FiPlus />}
          className="bg-green-600 hover:bg-green-700"
          onClick={() => setModalOpened(true)}
        >
          New Ticket
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="p-6" shadow="sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Tickets</p>
              <p className="text-2xl font-bold text-gray-900">
                {supportTickets.length}
              </p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <FiHeadphones className="text-primary-900 text-xl" />
            </div>
          </div>
        </Card>

        <Card className="p-6" shadow="sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Open</p>
              <p className="text-2xl font-bold text-blue-600">{openTickets}</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <FiMessageSquare className="text-primary-900 text-xl" />
            </div>
          </div>
        </Card>

        <Card className="p-6" shadow="sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">In Progress</p>
              <p className="text-2xl font-bold text-yellow-600">
                {inProgressTickets}
              </p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <FiHeadphones className="text-primary-900 text-xl" />
            </div>
          </div>
        </Card>

        <Card className="p-6" shadow="sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Urgent</p>
              <p className="text-2xl font-bold text-red-600">{urgentTickets}</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <FiMessageSquare className="text-primary-900 text-xl" />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6" shadow="sm">
        <div className="flex gap-4 mb-6">
          <TextInput
            placeholder="Search tickets..."
            leftSection={<FiSearch />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Select
            placeholder="Status"
            value={statusFilter}
            onChange={setStatusFilter}
            data={[
              { value: "all", label: "All Status" },
              { value: "open", label: "Open" },
              { value: "in_progress", label: "In Progress" },
              { value: "resolved", label: "Resolved" },
              { value: "closed", label: "Closed" },
            ]}
            className="w-40"
          />
          <Select
            placeholder="Priority"
            value={priorityFilter}
            onChange={setPriorityFilter}
            data={[
              { value: "all", label: "All Priority" },
              { value: "urgent", label: "Urgent" },
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" },
            ]}
            className="w-40"
          />
        </div>

        <Table.ScrollContainer minWidth={500}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Ticket #</Table.Th>
                <Table.Th>Customer</Table.Th>
                <Table.Th>Subject</Table.Th>
                <Table.Th>Priority</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Created</Table.Th>
                <Table.Th>Last Updated</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {filteredTickets.map((ticket) => (
                <Table.Tr key={ticket.id}>
                  <Table.Td className="font-medium">
                    {ticket.ticketNumber}
                  </Table.Td>
                  <Table.Td>{ticket.customer}</Table.Td>
                  <Table.Td>{ticket.subject}</Table.Td>
                  <Table.Td>
                    <Text c={getPriorityColor(ticket.priority)}>
                      {ticket.priority}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c={getStatusColor(ticket.status)}>
                      {ticket.status.replace("_", " ")}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </Table.Td>
                  <Table.Td>
                    {new Date(ticket.lastUpdated).toLocaleDateString()}
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

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Create New Ticket"
        size="lg"
      >
        <div className="space-y-4">
          <TextInput
            label="Customer Name"
            placeholder="Enter customer name"
            required
          />
          <TextInput
            label="Email"
            placeholder="customer@email.com"
            type="email"
            required
          />
          <TextInput
            label="Subject"
            placeholder="Brief description of the issue"
            required
          />
          <Select
            label="Priority"
            placeholder="Select priority"
            data={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
              { value: "urgent", label: "Urgent" },
            ]}
            required
          />
          <Textarea
            label="Description"
            placeholder="Detailed description of the issue"
            minRows={4}
            required
          />
          <div className="flex gap-3 justify-end">
            <Button variant="subtle" onClick={() => setModalOpened(false)}>
              Cancel
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Create Ticket
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Support;
