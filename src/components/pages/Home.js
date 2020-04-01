import React, { Fragment } from "react";
import Showcase from "../layout/home/Showcase";
import MainContent from "../layout/home/MainContent";
import UpdateSection from "../layout/home/UpdateSection";

const Home = () => {
  return (
    <Fragment>
      <Showcase />
      <MainContent />
      <UpdateSection />
    </Fragment>
  );
};

export default Home;
