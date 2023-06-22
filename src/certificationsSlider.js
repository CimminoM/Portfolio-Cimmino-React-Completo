import Carousel from "react-bootstrap/Carousel";
import certAulab from "./img/certAulab.jpg";
import certGoogle from "./img/certGoogle.jpg";
import certJava from "./img/certJava.jpg";
import certFreeCode from "./img/certFreeCode.jpg";
import certReact from "./img/certReact.jpg";

function CertificationsSlider() {
  return (
    <>
      <div id="Slider" data-aos="fade-up" data-aos-duration="2000">
        <h2>Certifications</h2>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={certAulab}
              alt="Certification from Aulab Bootcamp for Full Stack Web Developer"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={certFreeCode}
              alt="Certification from FreeCodeCamp for Responsive Web Design"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={certGoogle}
              alt="Certification from Google"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={certReact}
              alt="Certification from Udemy for React Development"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={certJava}
              alt="Certification from Udemy for Java Development"
              fluid
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CertificationsSlider;
