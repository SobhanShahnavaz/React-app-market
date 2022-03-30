import React, { Component } from "react";
import Divider from "./Divider";
import Footer from "./footer";

class ProjectPurpose extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="http://localhost:3000/bootstrap-icons-1.8.1/filetype-jsx.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="display-5 fw-bold">Project purpose</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              This react project is made by Sobhan Shahnavaz, Student of Shahid
              Bahonar university of Shiraz,Fars, Iran. The project is made for
              Mr. Rahmani, Professor of Web design lecture in university of
              Shiraz.
            </p>
          </div>
          <div className="col-lg-6 mx-auto mb-4">
            <img
              className="ms-5 mx-auto"
              src="http://localhost:3000/bootstrap-icons-1.8.1/telegram.svg"
              width="50"
              height="50"
            />
            <b className="lead mb-4 ms-2">@Sobhan_Shahnavaz_Official</b>
            <br />
            <br />
            <img
              className="me-5 mx-auto"
              src="http://localhost:3000/bootstrap-icons-1.8.1/whatsapp.svg"
              width="50"
              height="50"
            />
            <b className="lead mb-4 ms-2">+98 903 167 2899</b>
            <br />
            <br />
            <img
              className="me-5 mx-auto"
              src="http://localhost:3000/bootstrap-icons-1.8.1/globe2.svg"
              width="50"
              height="50"
            />
            <a
              href="https://farspics.ir"
              target="_blank"
              className="lead mb-4 ms-2"
            >
              Farspics.ir
            </a>
          </div>
        </div>
        <Divider />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProjectPurpose;
