import type { ReactNode } from "react";
import { Card } from "@mantine/core";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: ReactNode;
  highlighted?: string;
}

const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  highlighted,
}: StatCardProps) => {
  return (
    <Card className={`p-6`} shadow="sm">
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-medium text-primary-900">{title}</h3>
          {highlighted && (
            <div
              className={`w-3 h-2.5 ${highlighted ? highlighted : ""} rounded-xs`}
            ></div>
          )}
        </div>
        <div className="text-primary-900">{icon}</div>
      </div>
      <div className="text-3xl font-bold text-primary-900 mb-1 text-center">
        {value}
      </div>
      <p className="text-sm text-primary-900">{subtitle}</p>
    </Card>
  );
};

export default StatCard;
