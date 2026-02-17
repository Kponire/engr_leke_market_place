import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { RiBarChart2Line } from "react-icons/ri";
import { CiBank } from "react-icons/ci";
import { MdOutlineInventory } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import classes from "../../assets/css/pages.module.css";

const NAV_ITEMS = [
  { label: "Dashboard", path: "/dashboard", icon: AiOutlineDashboard },
  {
    label: "My Store",
    path: "/dashboard/store",
    icon: BiStore,
    siblings: [
      { label: "store", path: "/dashboard/store" },
      { label: "publish", path: "/dashboard/store/publish" },
    ],
  },
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
        style={{
          backgroundColor: "var(--color-secondary)",
          borderColor: "transparent",
        }}
      >
        <Group h="100%" px="lg" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color={"white"}
            />
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-8 w-12" />
              <Text fw={700} size="xl" c="white">
                GreenMarket
              </Text>
            </div>
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
          backgroundColor: "var(--color-primary)",
          padding: "0",
          borderColor: "#334155",
        }}
      >
        <nav className="space-y-1">
          {NAV_ITEMS.map(({ path, label, icon: Icon, siblings = [] }) => (
            <NavLink
              key={path}
              href={path}
              label={label}
              leftSection={<Icon size={16} stroke={"1.5"} />}
              childrenOffset={28}
              className={
                location.pathname === path ||
                siblings.some((sibling) => sibling.path === location.pathname)
                  ? classes.navButtonActive
                  : classes.navButton
              }
            >
              {siblings.length > 0 && (
                <div className="ml-6">
                  {siblings.map((sibling) => (
                    <NavLink
                      key={sibling.path}
                      href={sibling.path}
                      label={sibling.label}
                      py={"8px"}
                      c={"white"}
                      bdrs={1}
                      bg={
                        location.pathname === sibling.path
                          ? "oklch(62.7% 0.194 149.214)"
                          : "transparent"
                      }
                    />
                  ))}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </AppShell.Navbar>

      <AppShell.Main bg={"#E0E0E0"}>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer
        style={{
          backgroundColor: "var(--color-secondary)",
          borderColor: "var(--color-secondary)",
        }}
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
      <Text c="dimmed" size="xs">
        Lorem ipsum
      </Text>
    </div>
  );
}
