import React from "react";
import HomeSlider from "../components/HomeSlider";
import HomeSeparator from "../components/HomeSeparator";
import HomeNetworksProfiles from "../components/HomeNetworksProfiles";

const Home = () => {
  return (
    <div className="mt-0">
      <HomeSlider></HomeSlider>
      <HomeSeparator></HomeSeparator>
      <HomeNetworksProfiles></HomeNetworksProfiles>
    </div>
  );
};

export default Home;
