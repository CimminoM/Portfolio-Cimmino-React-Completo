import "./styles.css";
import styled from "styled-components";
import React, { useEffect, useState, Suspense } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { MdVideoCall } from "react-icons/md";
import { isDesktop } from "react-device-detect";
import AvatarCimmino from "./Avatar";
import Typed from "react-typed";
import "bootstrap/dist/css/bootstrap.min.css";
import IndividualIntervalsExample from "./slider.js";
import CertificationsSlider from "./certificationsSlider.js";
import VideoSlider from "./VideoSlider.js";
import Footer from "./footer.js";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaLaravel,
  FaNodeJs,
  FaJava,
  FaPython,
  FaBootstrap,
  FaShopify,
  FaWordpress,
  FaArrowDown,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiBigcommerce } from "react-icons/si";

export default function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showScene, setShowScene] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showImage, setShowImage] = useState(true);
  const tecnologie = [
    { name: "My Technologies:" },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "Java", icon: <FaJava /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Shopify", icon: <FaShopify /> },
    { name: "BigCommerce", icon: <SiBigcommerce /> },
    { name: "WordPress", icon: <FaWordpress /> },
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Lazy load Spline component
  const LazySpline = React.lazy(() =>
    import("@splinetool/react-spline").then((module) => ({
      default: module.default,
    }))
  );

  useEffect(() => {
    if (isDesktop) {
      setShowScene(true);
    }
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    setIsAnimated(true);
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Calendly Logic
  const handleContactClick = () => {
    const calendlyLink = "https://calendly.com/cimminomichele/30min";
    window.open(calendlyLink);
  };

  return (
    <Router>
      <Wrapper>
        {isDesktop && (
          <Suspense fallback={null}>
            {showScene ? (
              <LazySpline
                className="spline"
                scene="https://prod.spline.design/BycqOYShHf20M83i/scene.splinecode"
              />
            ) : null}
          </Suspense>
        )}

        <Content>
          <Menu className={isAnimated ? "text-pop-up-top" : ""}>
            <h1>Cimmino Michele</h1>
            <ul className="List">
              <Typed
                strings={[
                  "I'm a Developer",
                  "for:",
                  "Web App",
                  "E-commerce",
                  "Websites",
                ]}
                typeSpeed={63}
                backSpeed={63}
                loop={true}
              />
            </ul>
            <AvatarCimmino />
            <Link
              to="https://www.linkedin.com/in/michele-cimmino-428289235/"
              className="Link"
            >
              {" "}
              <BsLinkedin size={35} className="Rotta" />
            </Link>
            <Link
              to="mailto:cimminomicheleportfolio@gmail.com"
              className="Link"
            >
              {" "}
              <BiMailSend size={35} className="Rotta" />
            </Link>
            <Link className="Link">
              {" "}
              <MdVideoCall
                size={35}
                className="Rotta"
                onClick={handleContactClick}
              />
            </Link>
          </Menu>
          <a className="Link" href="#Slider">
            <FaArrowDown size={45} className="floating" />
          </a>
        </Content>
        <div className="mover-1">
          {tecnologie.map((tecnologia, index) => (
            <div key={index} className="tecnologia">
              {tecnologia.icon}
              <span>{tecnologia.name}</span>
            </div>
          ))}
        </div>
      </Wrapper>
      <IndividualIntervalsExample />
      <CertificationsSlider />
      <VideoSlider />
      <div className="scrollhelper"></div>
      <Footer />
    </Router>
  );
}

// Components for the Home
const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    transform: scale(1);
    width: 100%;

    @media (max-width: 1024px) {
      transform: scale(0.7);
      width: 120%;
      .text-pop-up-top {
        transform: scale(0.8);
      }
    }

    @media (max-width: 600px) {
      .text-pop-up-top {
        transform: scale(0.5);
      }
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  .List {
    margin: auto;
    list-style-type: none;
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    @media (max-width: 1024px) {
      transform: scale(0.8);
    }

    @media (max-width: 600px) {
      transform: scale(0.6);
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  margin-top: 25px;

  background: rgba(255, 145, 246, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.1px);
  -webkit-backdrop-filter: blur(5.1px);
  border: 3px solid rgba(255, 145, 246, 0.69);
`;
