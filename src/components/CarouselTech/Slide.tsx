import "./CarouselTech.css";

interface PropsTech {
  icon: string;
  tech: string;
}

type SlideProps = {
  index: number;
  item: PropsTech;
};

export const Slide = ({ index, item }: SlideProps) => {
  return (
    <div className="styled-slide" key={index}>
      <img width={80} src={item.icon} alt={item.tech} draggable="false" />
      <h3 className="styled-copy">{item.tech}</h3>
    </div>
  );
};
