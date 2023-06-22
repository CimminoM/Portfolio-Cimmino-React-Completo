import Carousel from "react-bootstrap/Carousel";
import Artimg from "./img/art_ex.jpg";
import Flowimg from "./img/flowex.jpg";
import Travelimg from "./img/travelex.jpg";
import Gelateriaimg from "./img/gelateriaex.jpg";
import Prestoimg from "./img/Prestoimg.jpg";
function IndividualIntervalsExample() {
  return (
    <>
      <div id="Slider" data-aos="fade-up" data-aos-duration="2000">
        <h2>Projects</h2>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={Artimg}
              alt="Progetto Art,un progetto incentrato all Arte che rappresenta il percorso di una galleria artistica su un sito web"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={Prestoimg}
              alt="Il progetto completo di un Sito per Annunci"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={Flowimg}
              alt="Il progetto di un Artista Fotografo che vuole far vedere il mondo dalla sua prospettiva"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={Travelimg}
              alt="Un progetto di un agenzia di viaggi che offre vari servizi in abbonamento per viaggiare comodi e senza preoccupazioni"
              fluid
            />
          </Carousel.Item>
          <Carousel.Item interval={800}>
            <img
              className="d-block w-100"
              src={Gelateriaimg}
              alt="Il progetto di una Gelateria con molti prodotti Gustosi"
              fluid
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default IndividualIntervalsExample;
