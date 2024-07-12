import React from "react";
import { Button } from "@nextui-org/react";

const CategoryNav = () => {
  const brands = [
    {
      name: "toyota",
      image:
        "https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "honda",
      image:
        "https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "nissan",
      image:
        "https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "mercedes",
      image:
        "https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "bmw",
      image:
        "https://images.pexels.com/photos/261986/pexels-photo-261986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div>
      <div className="flex gap-4 items-center">
        {brands.map((brand) => (
          <Button
            isIconOnly
            color="default"
            aria-label={brand.name}
            onClick={() => console.log(brand.name)}
            icon={<img src={brand.image} alt={brand.name} />}
          >
            {brand.image}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
