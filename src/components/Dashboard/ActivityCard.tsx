import { Box, Image } from "@mantine/core";
import type { ActivityItem } from "../../types";
import nullImage from "../../assets/Frame_1.png";

interface ActivityCardProps {
  item: ActivityItem;
}

const ActivityCard = ({ item }: ActivityCardProps) => {
  return (
    <Box className="p-4 mb-3">
      <div className="flex items-center gap-3">
        <div className="w-6.5 h-5.25 bg-[#4F4F4F] rounded-xs"></div>
        <div className="flex items-start gap-2.5">
          <Image
            radius="md"
            src={null}
            h={"46px"}
            w="55px"
            fallbackSrc={nullImage}
          />
          <div>
            {/* <h4 className="font-medium text-base text-black">{item.title}</h4> */}
            <p className="text-sm text-primary-900 pt-1">{item.description}</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ActivityCard;
