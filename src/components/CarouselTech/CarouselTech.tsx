import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./CarouselTech.css";

SwiperCore.use([EffectCoverflow, Pagination]);

export const CarouselTech = () => {
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
    { icon: "/imgs/icons/TailwindCSS.png", tech: "Tailwind" },
    { icon: "/imgs/icons/MaterialUI.png", tech: "Material UI" },
    { icon: "/imgs/icons/Bootstrap.png", tech: "Bootstrap" },
    { icon: "/imgs/icons/shadcn.png", tech: "Shadcn" },
    { icon: "/imgs/icons/WordPress.png", tech: "WordPress" },
    { icon: "/imgs/icons/Salesforce.png", tech: "Salesforce" },
    { icon: "/imgs/icons/Drupal.png", tech: "Drupal" },
    { icon: "/imgs/icons/Redux.png", tech: "Redux" },
    { icon: "/imgs/icons/Git.png", tech: "Git" },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={6}
        slidesPerView="auto"
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // slidesPerView={4}
        // breakpoints={{
        //   "@0.00": {
        //     slidesPerView: 2,
        //     spaceBetween: 25,
        //   },
        //   "@1.25": {
        //     slidesPerView: 2.5,
        //     spaceBetween: 20,
        //   },
        //   "@1.50": {
        //     slidesPerView: 4,
        //     spaceBetween: 30,
        //   },
        //   "@1.75": {
        //     slidesPerView: 8,
        //     spaceBetween: 20,
        //   },
        // }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {data.map((e) => (
          <SwiperSlide
            key={e.tech}
            style={{ backgroundImage: `url(${e.icon})` }}
          >
            <p>{e.tech}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
