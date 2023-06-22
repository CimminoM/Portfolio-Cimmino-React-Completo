import Carousel from "react-bootstrap/Carousel";

function VideoSlider() {
  return (
    <>
      <div id="Slider" data-aos="fade-up" data-aos-duration="2000">
        <h2>Intro Projects</h2>
        <Carousel>
          <Carousel.Item>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7029446104387600384?compact=1"
              width="100%"
              height="500px"
              frameborder="0"
              allowfullscreen=""
              title="Post incorporato"
            ></iframe>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default VideoSlider;
