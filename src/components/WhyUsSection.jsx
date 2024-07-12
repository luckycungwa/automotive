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

const WhyUsSection = () => {
  return (
    <div className="w-full p-4 gap-8 flex flex-col items-center flex-wrap justify-center">
      <h1>Why Us</h1>
      <div className="w-full py-4">
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
            <Link isExternal showAnchorIcon href="#">
              Contact Us
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default WhyUsSection;
