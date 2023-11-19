import { Card, CardContent } from "./ui/card";
import loadingGif from './load-35_256.gif';
import { Skeleton } from "./ui/skeleton";

const Shimmer = () => {
  return (
    <Card className="md:w-[100%/3] lg:w-[100%/5] border-none">
      <CardContent className=" h-[280px] p-[0px]">
      <img src={loadingGif} alt="Loading..." className="h-full w-full rounded-lg" />
      </CardContent>
    </Card>
  );
};

export default Shimmer;
