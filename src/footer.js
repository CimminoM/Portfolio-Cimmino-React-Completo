import React from "react";
import { MDBFooter, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.linkedin.com/in/michele-cimmino-428289235/"
            role="button"
          >
            <BsLinkedin />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://github.com/CimminoM"
            role="button"
          >
            <BsGithub />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://cimminomicheledev.netlify.app/">
          cimminomicheledev.netlify.app
        </a>
      </div>
    </MDBFooter>
  );
}
