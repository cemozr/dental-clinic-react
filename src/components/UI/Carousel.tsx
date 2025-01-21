import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TreatmentCard from "./TreatmentCard";
import SpecialistCard from "./SpecialistCard";

type CarouselProps = {
  data: { imgsrc: string; header: string; description: string }[];
};

type TreatmentCarouselProps = {
  type: "treatment-carousel";
} & CarouselProps;

type SpecialistCarouselProps = {
  type: "specialist-carousel";
} & CarouselProps;

export default function Carousel(
  props: TreatmentCarouselProps | SpecialistCarouselProps,
) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (props.type === "treatment-carousel") {
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {props.data.map((d, i) => {
            return (
              <TreatmentCard
                key={i}
                imgsrc={d.imgsrc}
                header={d.header}
                description={d.description}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
  if (props.type === "specialist-carousel") {
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {props.data.map((d, i) => {
            return (
              <SpecialistCard
                key={i}
                imgsrc={d.imgsrc}
                header={d.header}
                description={d.description}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}
