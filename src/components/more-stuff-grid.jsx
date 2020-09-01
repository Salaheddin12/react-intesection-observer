import React from "react";
import { useInView } from "react-intersection-observer";

const MoreStuffGrid = ({ P_ClassName, src, Img_ClassName }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  const renderApearClassName = () => {
    return inView ? " apear" : "";
  };
  const setImageSrc = (src) => {
    return inView ? src : null;
  };
  return (
    <div ref={ref} className="more-stuff-grid">
      {P_ClassName === "slide-in from-right" ? (
        <>
          <img
            data-src={src}
            src={setImageSrc(src)}
            className={Img_ClassName + renderApearClassName()}
          />
          <p className={P_ClassName + renderApearClassName()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
        </>
      ) : (
        <>
          {" "}
          <p className={P_ClassName + renderApearClassName()}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit,
            quae beatae vero sit magni quaerat id ratione. Dolor optio unde amet
            omnis sapiente neque cumque consequuntur reiciendis deserunt.
            Dolorem vero exercitationem consequuntur, eligendi cupiditate
            debitis facilis quibusdam magni. Eveniet.
          </p>
          <img
            data-src={src}
            src={setImageSrc(src)}
            className={Img_ClassName + renderApearClassName()}
          />
        </>
      )}
    </div>
  );
};

export default MoreStuffGrid;
