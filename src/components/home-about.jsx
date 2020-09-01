import React from "react";
import AboutCol from "./about-col";

const HomeAbout = () => {
  return (
    <div class="home-about">
      <h2>About us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div class="columns">
        <AboutCol title="Lorem, ipsum." />
        <AboutCol title="A, illo!" />
        <AboutCol title="Repudiandae, error?" />
      </div>
    </div>
  );
};

export default HomeAbout;
