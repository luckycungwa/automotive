import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const FeatureCard = () => {
  return (
    <div>
      <Card className="max-w-[400px] mx-auto px-4 m-6">
        <CardHeader className="flex gap-4">
          <Image
            alt="nextui logo"
            height={60}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={60}
          />
          <div className="flex flex-col">
            <p className="text-md text-bold">Are You Looking For A Car?</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>We have the best deals for you on any car brand.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="#"
          >
            Contact Us
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeatureCard;
