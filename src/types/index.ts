export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface DashboardStats {
  totalSales: number;
  totalOrders: number;
  activeOrders: number;
  canceledOrders: number;
  cartItems: number;
  productsInCart: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  sku: string;
  status: "active" | "inactive" | "out_of_stock";
  createdAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: string;
  date: string;
  status: "pending" | "processing" | "completed" | "canceled";
  total: number;
  items: number;
}

export interface Payment {
  id: string;
  transactionId: string;
  customer: string;
  amount: number;
  method: "card" | "bank_transfer" | "cash" | "paypal";
  status: "completed" | "pending" | "failed" | "refunded";
  date: string;
  orderNumber: string;
}

export interface InventoryItem {
  id: string;
  product: string;
  sku: string;
  quantity: number;
  reorderLevel: number;
  status: "in_stock" | "low_stock" | "out_of_stock";
  lastRestocked: string;
  location: string;
}

export interface SupportTicket {
  id: string;
  ticketNumber: string;
  customer: string;
  subject: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  priority: "low" | "medium" | "high" | "urgent";
  createdAt: string;
  lastUpdated: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "sale" | "order" | "inventory" | "support";
}
