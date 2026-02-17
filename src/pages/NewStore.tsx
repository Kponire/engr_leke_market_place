import {
  Text,
  Paper,
  Grid,
  Image,
  Stack,
  ActionIcon,
  SimpleGrid,
  Card,
} from "@mantine/core";
import { TbPlus, TbEdit } from "react-icons/tb";
import { useMediaQuery } from "@mantine/hooks";
import nullImage from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";

const AriseAndShinePage = () => {
  const navigate = useNavigate();
  const products = Array(4).fill({
    name: "Mama's Pride Nigerian Rice 10kg",
    price: "₦ 8,000",
  });

  const isMediumScreen = useMediaQuery("(max-width: 992px)");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const isExtraSmallScreen = useMediaQuery("(max-width: 576px)");

  const getCols = () => {
    if (isExtraSmallScreen) return 1;
    if (isSmallScreen) return 2;
    if (isMediumScreen) return 3;
    return 4;
  };

  return (
    <div className="px-9 pt-6">
      <div className="mb-10">
        <h1 className="text-[25px] font-medium text-primary-900">
          Arise and Shine Enterprise
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          radius="md"
          withBorder
          w={"563px"}
          className="overflow-hidden mb-8"
        >
          <div className="bg-[#BDBDBD] h-64 flex items-center justify-center">
            <Image
              radius="md"
              src={null}
              h={"146px"}
              w="122px"
              fit="contain"
              fallbackSrc={nullImage}
            />
          </div>

          <div className="p-6 h-38.25 relative bg-[#F5F5F5] rounded-lg">
            <Stack align="center" gap={4} className="text-center">
              <Text size="sm" className="max-w-md">
                Address: 54, Atali Farm Road, Elimgbu, Portharcourt Rivers State
              </Text>
              <Text size="sm" fw={500}>
                Closest Landmark: Atali Town Hall
              </Text>
              <Text size="sm">Phone No: +2347064263572</Text>
              <Text size="sm">Email: Ariseandshine@gmail.com</Text>
            </Stack>

            <ActionIcon
              style={{ position: "absolute", right: 16, bottom: 16 }}
              variant="subtle"
              color="gray"
            >
              <TbEdit size={18} />
            </ActionIcon>
          </div>
        </Paper>
      </div>

      {/* Map Section */}
      <Paper
        radius="md"
        className="overflow-hidden mb-10 h-64 shadow-md border border-gray-200"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127161.02611728148!2d6.9366471!3d4.815554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1063450917070119%3A0xc392723389a19c5c!2sPort%20Harcourt!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ borderRadius: "8px", border: "1px solid #828282" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Paper>

      {/* Publish Product Instructions */}
      <Grid gutter="xl" align="center" className="mb-12">
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }} mb={7}>
          <Text fw={700} size="lg" mb="md">
            How to publish a product:
          </Text>
          <ul className="list-disc pl-5 space-y-3 text-gray-600 text-sm">
            <li>
              Click on the <b>+</b> on the "Publish more products"
            </li>
            <li>
              Fill the form to carefully provide details about the product
              you're willing to publish
            </li>
            <li>Upload images of the product you're publishing</li>
            <li>Click on Submit and wait for review and approval.</li>
          </ul>
        </Grid.Col>

        <Grid.Col
          span={{ base: 12, md: 6, lg: 6 }}
          mb={5}
          onClick={() => {
            navigate("/dashboard/store/publish");
          }}
        >
          <div className="rounded-full w-48 h-48 flex flex-col items-center justify-center cursor-pointer bg-gray-50 transition-colors border-2 border-dashed border-gray-300">
            <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
              Publish
            </Text>
            <TbPlus size={52} className="text-gray-400 my-1" />
            <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
              Products
            </Text>
          </div>
        </Grid.Col>
      </Grid>

      <Text mb={"16px"} fw={700} fz={"18px"}>
        Published Items
      </Text>

      {/* Product Grid */}
      <SimpleGrid cols={getCols()} spacing="lg">
        {products.map((item, index) => (
          <Card
            key={index}
            shadow="sm"
            padding="none"
            radius="md"
            withBorder
            className="hover:shadow-lg transition-shadow"
          >
            <div className="bg-[#F5F5F5] h-47.25 w-full flex items-center justify-center">
              <Image
                radius="md"
                src={null}
                h={"46px"}
                w="55px"
                fit="contain"
                fallbackSrc={nullImage}
              />
            </div>

            <div className="p-4 bg-white">
              <Text fw={500} size="sm" lineClamp={2} className="h-10">
                {item.name}
              </Text>
              <Text fw={700} c="dark">
                {item.price}
              </Text>
            </div>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default AriseAndShinePage;
