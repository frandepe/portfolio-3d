import "./Carousel3D.css";
import { WebI } from "@/utils/svgIconsTech";

interface Props {
  imgs: string[];
  github?: string;
  web: string;
}

export const Carousel3D = ({ imgs, github, web }: Props) => {
  const handleNext = () => {
    const slide = document.getElementById("slide");
    if (slide) {
      const lists = slide.querySelectorAll(".item");
      if (lists.length > 0) {
        slide.appendChild(lists[0]);
      }
    }
  };

  const handlePrev = () => {
    const slide = document.getElementById("slide");
    if (slide) {
      const lists = slide.querySelectorAll(".item");
      if (lists.length > 0) {
        slide.prepend(lists[lists.length - 1]);
      }
    }
  };

  return (
    <div className="containerCarousel">
      <div id="slide" className="slide">
        {imgs.map((image, index) => (
          <div
            key={index}
            className={`item ${index === 0 ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className={`content ${index === 1 ? "visible" : ""}`}>
              <div className="name text-white">
                {github && (
                  <a
                    href={github}
                    target="__blank"
                    className="hover:opacity-80 transition-opacity flex items-end gap-2"
                  >
                    <img src="/imgs/icons/GitHub.png" alt="github" width={40} />
                  </a>
                )}
              </div>
              <div className="flex gap-2 des text-white">
                <a
                  href={web}
                  target="__blank"
                  className="hover:opacity-80 transition-opacity flex items-end gap-2"
                >
                  {" "}
                  <WebI />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[30px] z-[4] text-center w-full">
        <button
          id="prev"
          className="w-[50px] h-[50px] rounded-full border bg-[var(--primary)] border-gray-500 transition duration-500 hover:bg-[var(--primaryHover)]"
          onClick={handlePrev}
        >
          -
        </button>
        <button
          id="next"
          className="w-[50px] h-[50px] ml-1 rounded-full border bg-[var(--primary)] border-gray-500 transition duration-500 hover:bg-[var(--primaryHover)]"
          onClick={handleNext}
        >
          +
        </button>
      </div>
    </div>
  );
};
