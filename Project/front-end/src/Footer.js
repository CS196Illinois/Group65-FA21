import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      style={{
        backgroundColor: "#416FE3",
        FontFace: "Helvetica Neue",
      }}
      className="text-white font-small pt-4 mt-4 fixed-bottom"
    >
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol>
            <h5 className="title">
              Lecture Summarizer: An application that outputs a summarized
              transcript from a lecture video*
            </h5>
            <p>*English only, audio quality affects transcription accuracy.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
