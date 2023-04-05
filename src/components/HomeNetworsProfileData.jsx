import React from "react";

const HomeNetworsProfileData = ({ data }) => {
  return (
    <div className="justify-items-center  items-center mb-5">
      <a
        target="_blank"
        rel="noreferrer"
        className=" rounded-full"
        href={data.href}
      >
        <img
          className=" rounded-full"
          src={data.src}
          alt={data.alt}
          height="80"
          width="80"
        ></img>
        <p className="text-center">{data.title}</p>
      </a>
    </div>
  );
};

export default HomeNetworsProfileData;
