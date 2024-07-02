import { useEffect, useMemo, useRef, useState } from "react";
import { Slide } from "./Slide";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import "./CarouselTech.css";

const data = [
  { icon: "/imgs/icons/HTML5.png", tech: "HTML" },
  { icon: "/imgs/icons/CSS3.png", tech: "CSS" },
  { icon: "/imgs/icons/Sass.png", tech: "Sass" },
  { icon: "/imgs/icons/JavaScript.png", tech: "JavaScript" },
  { icon: "/imgs/icons/TypeScript.png", tech: "TypeScript" },
  { icon: "/imgs/icons/react.png", tech: "React" },
  { icon: "/imgs/icons/Next.js.png", tech: "Next" },
  { icon: "/imgs/icons/Express.png", tech: "Express" },
  { icon: "/imgs/icons/Node.js.png", tech: "Node.js" },
  { icon: "/imgs/icons/Python.png", tech: "Python" },
  { icon: "/imgs/icons/Flask.png", tech: "Flask" },
  { icon: "/imgs/icons/MongoDB.png", tech: "MongoDB" },
  { icon: "/imgs/icons/Mongoose.js.png", tech: "Mongoose" },
  { icon: "/imgs/icons/MySQL.png", tech: "MySQL" },
  { icon: "/imgs/icons/Tailwind CSS.png", tech: "Tailwind" },
  { icon: "/imgs/icons/Material UI.png", tech: "Material UI" },
  { icon: "/imgs/icons/Bootstrap.png", tech: "Bootstrap" },
  { icon: "/imgs/icons/WordPress.png", tech: "WordPress" },
  { icon: "/imgs/icons/Salesforce.png", tech: "Salesforce" },
  { icon: "/imgs/icons/Drupal.png", tech: "Drupal" },
  { icon: "/imgs/icons/Redux.png", tech: "Redux" },
  { icon: "/imgs/icons/Git.png", tech: "Git" },
];

const SLIDER_LENGTH = data.length;

export const CarouselTech = () => {
  gsap.registerPlugin(Draggable);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    if (sliderRef.current == null) {
      throw new Error("sliderRef.current is undefined");
    }

    const slidesTotalWidth =
      sliderRef.current.children[0].clientWidth * SLIDER_LENGTH - 1;
    const slidesTotalMargin = window.innerWidth * 0.1 * (SLIDER_LENGTH - 1);
    const itemLength = (slidesTotalWidth + slidesTotalMargin) / SLIDER_LENGTH;

    const onDrag = () => {
      // @ts-ignore
      const x: number = gsap.getProperty(sliderRef.current, "x");
      setCurrentItem(Math.round(Math.abs(x / itemLength)));
    };

    // Crea la instancia Draggable
    const draggableInstance = Draggable.create(sliderRef.current!, {
      type: "x",
      inertia: true,
      onDrag: onDrag,
      onThrowUpdate: onDrag,
      bounds: {
        minX: -(slidesTotalWidth + slidesTotalMargin - window.innerWidth),
        maxX: 0,
      },
    })[0];

    return () => {
      draggableInstance.kill();
    };
  }, []);

  const slides = useMemo(() => Array.from({ length: SLIDER_LENGTH }), []);

  return (
    <>
      <div className="styled-slider mt-10 md:mt-0" ref={sliderRef}>
        {data.map((item, index) => (
          <Slide key={index} item={item} index={index} />
        ))}
      </div>
      <ul className="styled-pagination-wrapper">
        {slides.map((_item, index) => (
          <li
            className={`styled-pagination-item ${
              currentItem === index ? "active" : ""
            }`}
            key={index}
          />
        ))}
      </ul>
    </>
  );
};
