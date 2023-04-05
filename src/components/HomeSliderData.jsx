import React from "react";

const HomeSliderData = ({ image }) => {
  return (
    <div key={image.id} className="col-span-8 rounded bg-blue-50/70 p-1 -mx-10">
      <h1 className="my-4 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
        {image.title}
      </h1>
      <div className="container grid grid-rows-4">
        <p className="m-2 p-2 text-xl sm:text-xl md:text-xl lg:text-2xl">
          {image.description}
        </p>
        <p className="m-2 p-2 text-xl sm:text-xl md:text-xl lg:text-2xl">
          {image.description2}
        </p>
        <p className="m-2  p-2 text-xl sm:text-xl md:text-xl lg:text-2xl">
          {image.description3}
        </p>
        <p className="m-2  p-2 text-xl sm:text-xl md:text-xl lg:text-2xl">
          {image.description4}
        </p>
      </div>
    </div>
  );
};

export default HomeSliderData;
