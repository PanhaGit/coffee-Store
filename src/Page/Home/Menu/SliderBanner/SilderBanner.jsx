import Carousel from "react-bootstrap/Carousel";
import "./SliderBannder.css";
import ImageSlider1 from "../../../../assets/API_img/browncoffe.jpg";
import ImageSlider2 from "../../../../assets/API_img/koi.jpg";
import ImageSlider3 from "../../../../assets/API_img/starbusck.jpg";
const SilderBanner = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <div className="SilderIamge">
          <img src={ImageSlider1} alt="" />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="SilderIamge">
          <img src={ImageSlider2} alt="" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="SilderIamge">
          <img src={ImageSlider3} alt="" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default SilderBanner;
