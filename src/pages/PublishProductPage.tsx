import { Text, Select, Stack, UnstyledButton, Box, Title } from "@mantine/core";
import { TbChevronRight, TbPhoto } from "react-icons/tb";
import classes from "../assets/css/pages.module.css";

const PublishProductPage = () => {
  //const [images, setImages] = useState([]);

  return (
    <div className="px-9 pt-5">
      <Title order={2} c="bright-green.9" fz={25}>
        Publish a product
      </Title>

      <Stack style={{ padding: "25px 0px", gap: "md" }}>
        {/* Category Selection */}
        <Select
          placeholder="Category"
          rightSection={
            <TbChevronRight size={18} color="var(--color-secondary)" />
          }
          data={["Electronics", "Food & Groceries", "Fashion", "Home Decor"]}
          classNames={{
            input: classes.publishLocationSelect,
          }}
          styles={{
            input: {
              height: "56px",
              borderRadius: "8px",
              border: "1px solid #828282",
              color: "var(--color-secondary)",
              fontSize: 16,
              padding: "10px 50px 10px 100px",
              background: "#E0E0E0",
            },
            section: {
              pointerEvents: "none",
              marginRight: "50px",
            },
          }}
        />

        {/* Location Selection */}
        <Select
          placeholder="Select Location"
          rightSection={
            <TbChevronRight size={18} color="var(--color-secondary)" />
          }
          data={["PortHarcourt", "Lagos", "Abuja", "Kano"]}
          classNames={{
            input: classes.publishLocationSelect,
          }}
          styles={{
            input: {
              height: 56,
              borderRadius: "8px",
              border: "1px solid #828282",
              color: "var(--color-secondary)",
              fontSize: 16,
              padding: "10px 0px 10px 100px",
              background: "#E0E0E0",
            },
            section: {
              pointerEvents: "none",
              marginRight: "50px",
            },
          }}
        />

        {/* Photo Upload Section */}
        <Box mt="md">
          <Text fw={500} size="sm" mb={8} color="dimmed">
            Add photo
          </Text>

          <UnstyledButton
            style={{
              width: "6rem",
              height: "6rem",
              borderWidth: "2px",
              borderStyle: "dashed",
              borderColor: "#9CA3AF",
              borderRadius: "0.5rem",
              backgroundColor: "#F3F4F6",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.2s ease-in-out", // transition-colors
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#F9FAFB")
            } // hover:bg-gray-50
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#F3F4F6")
            }
            onClick={() => console.log("Upload triggered")}
          >
            <TbPhoto size={32} className="text-gray-500" />
            <Text size="xs" mt={4}>
              upload
            </Text>
          </UnstyledButton>

          <Text
            fz={16}
            mt="xl"
            style={{ maxWidth: "400px", lineHeight: "24px" }}
          >
            First picture-is the title picture. You can change the order of
            photos: just grab your photos and drag
          </Text>
        </Box>
      </Stack>
    </div>
  );
};

export default PublishProductPage;
