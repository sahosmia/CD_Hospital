import { Card } from "@/components/ui/card";
import { bloodGroupPropsType } from "@/types/frontTypes";
import Link from "next/link";

const BloodGroupCard = ({
  bloodGroup,
}: {
  bloodGroup: bloodGroupPropsType;
}) => {
  return (
    <Link href={`/blood-groups/${bloodGroup.name}`}>
      <Card className="flex-1 rounded h-32 flex justify-center items-center">
        {bloodGroup.name}
      </Card>
    </Link>
  );
};

export default BloodGroupCard;
