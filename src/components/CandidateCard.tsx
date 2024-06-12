import { Candidate } from "@/App";
import { Button } from "@/components/ui/button"
import { FaLocationDot } from "react-icons/fa6";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LocationIcon from "./LocationIcon";
import { TypeAnimation } from "react-type-animation";



interface Props {
    data: Candidate;
}

const CandidateCard: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader className="flex flex-row gap-2">
          <Avatar className="border-2 border-black">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{data.firstName.substring(0, 1) + data.lastName.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-left">{data.firstName} {data.lastName}</CardTitle>
            <CardDescription>{data.desiredPosition}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-1 font-bold"><FaLocationDot /><p className="text-xs text-left mb-2">{data.location}</p></div>
          <div className="text-xs p-1 bg-slate-200 rounded-md">
            <TypeAnimation className="text-left" sequence={[data.experience.substring(0, 100)+"..."]}>
            </TypeAnimation>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>View Profile</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default CandidateCard;