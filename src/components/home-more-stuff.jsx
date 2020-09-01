import React from "react";
import MoreStuffGrid from "./more-stuff-grid";

const HomeMoreStuff = () => {
  return (
    <div class="home-more-stuff">
      <MoreStuffGrid
        src="https://unsplash.it/400"
        P_ClassName="slide-in from-right"
        Img_ClassName="slide-in from-left"
      />
      <MoreStuffGrid
        src="https://unsplash.it/401"
        P_ClassName="slide-in from-left"
        Img_ClassName="slide-in from-right"
      />
      <MoreStuffGrid
        src="https://unsplash.it/400"
        P_ClassName="slide-in from-right"
        Img_ClassName="slide-in from-left"
      />
      <MoreStuffGrid
        src="https://unsplash.it/401"
        P_ClassName="slide-in from-left"
        Img_ClassName="slide-in from-right"
      />
      <MoreStuffGrid
        src="https://unsplash.it/400"
        P_ClassName="slide-in from-right"
        Img_ClassName="slide-in from-left"
      />
      <MoreStuffGrid
        src="https://unsplash.it/401"
        P_ClassName="slide-in from-left"
        Img_ClassName="slide-in from-right"
      />
    </div>
  );
};

export default HomeMoreStuff;
