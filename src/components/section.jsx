import React, { useContext } from "react";
import { observerRefContext } from "./../App";
const Section = () => {
  const value = useContext(observerRefContext);
  return (
    <section ref={value} class="home-intro">
      <h1>Intersection Observer is pretty useful</h1>
    </section>
  );
};

export default Section;
