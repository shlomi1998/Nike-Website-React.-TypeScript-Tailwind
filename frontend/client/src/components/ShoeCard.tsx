import React, { FC, useState } from "react";

interface ImageURL {
  bigShoe: string;
  thumbnail: string;
}

interface ShoeCardProps {
  imgURL: ImageURL;
  changeBigShoeImage: (newImage: string) => void; // Define the parameter type if the function expects a parameter
  bigShoeImg: any;
  index?:any;
}

const ShoeCard: FC<ShoeCardProps> = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
  index
}) => {
  

    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
          changeBigShoeImage(imgURL.bigShoe);
        }
      };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe colletion"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
