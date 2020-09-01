import React from "react";
import { useInView } from "react-intersection-observer";
const AboutCol = ({ title }) => {
  const [ref, inView] = useInView({
    threshold: 1,
  });
  return (
    <div ref={ref} class={inView ? "col fade-in apear" : "col fade-in"}>
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quasi
        quis doloribus quia illum laudantium.
      </p>
    </div>
  );
};

export default AboutCol;
