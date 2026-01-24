import { AppShell, Burger, Group, Text, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { RiBarChart2Line } from "react-icons/ri";
import { CiBank } from "react-icons/ci";
import { MdOutlineInventory } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";

const NAV_ITEMS = [
  { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
  { label: "My Store", path: "/dashboard/store", icon: BiStore },
  { label: "Reporting", path: "/dashboard/reporting", icon: RiBarChart2Line },
  { label: "Payment", path: "/dashboard/payment", icon: CiBank },
  {
    label: "Inventory",
    path: "/dashboard/inventory",
    icon: MdOutlineInventory,
  },
  { label: "Support", path: "/dashboard/support", icon: BiSupport },
];

export function FullLayout() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{
        width: 280,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        style={{ backgroundColor: "#364153", borderColor: "#334155" }}
      >
        <Group h="100%" px="lg" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text fw={700} size="xl" c="white">
              Logo
            </Text>
          </Group>

          <Group gap="sm" justify="center">
            <Text size="sm" c="gray.2">
              Hi, Bartholomew
            </Text>

            <Text c="gray.5">|</Text>

            <UnstyledButton
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                color: "#e5e7eb",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#22c55e")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#e5e7eb")}
            >
              <PiSignOutBold />
              Sign Out
            </UnstyledButton>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar
        style={{
          backgroundColor: "#1e2939",
          padding: "16px",
          borderColor: "#334155",
        }}
      >
        <nav className="space-y-1">
          {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={() =>
                [
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition",
                  location.pathname === path
                    ? "bg-green-600 text-white"
                    : "text-gray-300 hover:bg-gray-700",
                ].join(" ")
              }
            >
              <Icon className="text-lg" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </AppShell.Navbar>

      <AppShell.Main bg={"#E0E0E0"}>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer
        style={{ backgroundColor: "#364153", borderColor: "#334155" }}
      >
        <div className="px-8 py-3 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-gray-400">
          <FooterColumn title="ABOUT MARKETPLACE" />
          <FooterColumn title="HOT LINKS" />
          <FooterColumn title="OUR RESOURCES" />
          <FooterColumn title="NEED HELP?" />
        </div>
      </AppShell.Footer>
    </AppShell>
  );
}

function FooterColumn({ title }: { title: string }) {
  return (
    <div>
      <Text fw={600} size="xs" c="white" mb={6}>
        {title}
      </Text>
      <Text size="xs">Lorem ipsum</Text>
    </div>
  );
}
