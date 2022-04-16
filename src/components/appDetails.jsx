import React, { Component } from "react";
import Divider from "./Divider";
import AppCard from "./applicationPreview";

class Details extends Component {
  state = {};

  readMLB() {
    let moreText = document.getElementById("MLText").className;
    let btnText = document.getElementById("ReadMLB");

    if (moreText === "visually-hidden") {
      moreText = "";
      btnText.textContent = "Read less";
      document.getElementById("MLText").className = moreText;
    } else {
      moreText = "visually-hidden";
      document.getElementById("MLText").className = moreText;
      btnText.textContent = "Read more";
    }
  }
  render() {
    const uri = document.location.href.toString();
    const app = uri.slice(uri.indexOf("?") + 1);
    if (uri.indexOf("?") > 0) {
      const cleanUri = uri.substring(0, uri.indexOf("?"));
      window.history.replaceState({}, document.title, cleanUri);
    }
    switch (app) {
      case "gunGame":
        const AppData = [
          {
            imgsrc: "http://localhost:3000/gun.jpg",
            title: "Gun Game",
            category: "Action",
            Version: "Version 1.3.9",
            downs: "24000",
            rating: "4.1",
            rates: "9K",
            size: "47 MG",
            text1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Egetnulla facilisi etiam dignissim diam quis enim lobortis.",
            text2:
              "Mauris sitamet massa vitae tortor. Integer quis auctor elit sed. Eget nullafacilisi etiam dignissim diam quis enim. Ut etiam sit amet nislpurus in. Molestie ac feugiat sed lectus.",
            text3:
              "Quam viverra orci sagittis eu. Sit amet luctus venenatis lectus magna fringilla. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Et molestie ac feugiat sed lectus vestibulum. Neque egestas congue quisque egestas diam in arcu cursus euismod. Enim facilisis gravida neque convallis a. Posuere ac ut consequat semper. Pretium viverra suspendisse potenti nullam ac.",
            text4:
              "Feugiat in fermentum posuere urna nec tincidunt praesent. Lorem mollis aliquam ut porttitor leo. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Magna fringilla urna porttitor rhoncus.",
          },
        ];
        return (
          <React.Fragment>
            {AppData.map((app) => (
              <div className="m-4 container row border border-light border-4 rounded-3">
                <img
                  src={app.imgsrc}
                  style={{ width: "12rem" }}
                  className="img-thumbnail m-3 "
                ></img>
                <h2 className="bg-light m-3 " style={{ width: "12rem" }}>
                  {app.title}
                  <br />
                  <i style={{ fontSize: "1.5rem" }} className="m-3">
                    {app.category}
                  </i>
                  <br />
                  <i style={{ fontSize: "1rem" }} className="m-3">
                    {app.Version}
                  </i>
                </h2>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.downs}</h4> Downloads
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.rating}</h4> from {app.rates} rates
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.category}</h4> category
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.size}</h4> size{" "}
                </span>
                <button
                  className="btn btn-success m-3 mt-5 w-50 mx-auto"
                  style={{ fontSize: "1rem" }}
                >
                  <b>Download</b>
                </button>
              </div>
            ))}
            <Divider />
            {AppData.map((app) => (
              <div className="container m-4 border border-light border-4 rounded-3">
                <p>{app.text1}</p>
                <span className="visually-hidden" id="MLText">
                  <p> {app.text2}</p>
                  <p> {app.text3}</p>
                  <p> {app.text4}</p>
                </span>
                <button onClick={this.readMLB} id="ReadMLB">
                  Read more
                </button>
              </div>
            ))}
            <Divider />
            <div className="list-group m-3">
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person-fill.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 1</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">
                      Good and entertaining game and I liked it.
                    </p>
                  </div>
                  <small className="opacity-50 text-nowrap">3 days ago</small>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 2</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">I love this game!</p>
                  </div>
                  <small className="opacity-50 text-nowrap">4 days ago</small>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person-fill.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 3</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">
                      it's a normal game not so perfect.
                    </p>
                  </div>
                  <small className="opacity-50 text-nowrap">1 week ago</small>
                </div>
              </a>
            </div>
            <Divider />
            <div>
              <i className="m-3"> Similar Apps</i>
              <AppCard />
            </div>
          </React.Fragment>
        );
      case "carGame":
        const AppData2 = [
          {
            imgsrc: "http://localhost:3000/muscle_car.webp",
            title: "Car Game",
            link: "/application?carGame",
            category: "Racing",
            Version: "Version 2.1",
            downs: "66000",
            rating: "4.6",
            rates: "18K",
            size: "186 MG",
            text1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Egetnulla facilisi etiam dignissim diam quis enim lobortis.",
            text2:
              "Mauris sitamet massa vitae tortor. Integer quis auctor elit sed. Eget nullafacilisi etiam dignissim diam quis enim. Ut etiam sit amet nislpurus in. Molestie ac feugiat sed lectus.",
            text3:
              "Quam viverra orci sagittis eu. Sit amet luctus venenatis lectus magna fringilla. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Et molestie ac feugiat sed lectus vestibulum. Neque egestas congue quisque egestas diam in arcu cursus euismod. Enim facilisis gravida neque convallis a. Posuere ac ut consequat semper. Pretium viverra suspendisse potenti nullam ac.",
            text4:
              "Feugiat in fermentum posuere urna nec tincidunt praesent. Lorem mollis aliquam ut porttitor leo. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Magna fringilla urna porttitor rhoncus.",
          },
        ];
        return (
          <React.Fragment>
            {AppData2.map((app) => (
              <div className="m-4 container row border border-light border-4 rounded-3">
                <img
                  src={app.imgsrc}
                  style={{ width: "12rem" }}
                  className="img-thumbnail m-3 "
                ></img>
                <h2 className="bg-light m-3 " style={{ width: "12rem" }}>
                  {app.title}
                  <br />
                  <i style={{ fontSize: "1.5rem" }} className="m-3">
                    {app.category}
                  </i>
                  <br />
                  <i style={{ fontSize: "1rem" }} className="m-3">
                    {app.Version}
                  </i>
                </h2>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.downs}</h4> Downloads
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.rating}</h4> from {app.rates} rates
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.category}</h4> category
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.size}</h4> size{" "}
                </span>
                <button
                  className="btn btn-success m-3 mt-5 w-50 mx-auto"
                  style={{ fontSize: "1rem" }}
                >
                  <b>Download</b>
                </button>
              </div>
            ))}
            <Divider />
            {AppData2.map((app) => (
              <div className="container m-4 border border-light border-4 rounded-3">
                <p>{app.text1}</p>
                <span className="visually-hidden" id="MLText">
                  <p> {app.text2}</p>
                  <p> {app.text3}</p>
                  <p> {app.text4}</p>
                </span>
                <button onClick={this.readMLB} id="ReadMLB">
                  Read more
                </button>
              </div>
            ))}
            <Divider />
            <div className="list-group m-3">
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person-fill.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 1</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">
                      Good and entertaining game and I liked it.
                    </p>
                  </div>
                  <small className="opacity-50 text-nowrap">3 days ago</small>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 2</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">I love this game!</p>
                  </div>
                  <small className="opacity-50 text-nowrap">4 days ago</small>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person-fill.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 3</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">
                      it's a normal game not so perfect.
                    </p>
                  </div>
                  <small className="opacity-50 text-nowrap">1 week ago</small>
                </div>
              </a>
            </div>
            <Divider />
            <div>
              <i className="m-3"> Similar Apps</i>
              <AppCard />
            </div>
          </React.Fragment>
        );
      case "ballGame":
        const AppData3 = [
          {
            imgsrc: "http://localhost:3000/ball.jpg",
            title: "Ball Game",
            link: "/application?ballGame",
            category: "Sport",
            Version: "Version 1.1",
            downs: "126000",
            rating: "3.8",
            rates: "25K",
            size: "67 MG",
            text1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Egetnulla facilisi etiam dignissim diam quis enim lobortis.",
            text2:
              "Mauris sitamet massa vitae tortor. Integer quis auctor elit sed. Eget nullafacilisi etiam dignissim diam quis enim. Ut etiam sit amet nislpurus in. Molestie ac feugiat sed lectus.",
            text3:
              "Quam viverra orci sagittis eu. Sit amet luctus venenatis lectus magna fringilla. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Et molestie ac feugiat sed lectus vestibulum. Neque egestas congue quisque egestas diam in arcu cursus euismod. Enim facilisis gravida neque convallis a. Posuere ac ut consequat semper. Pretium viverra suspendisse potenti nullam ac.",
            text4:
              "Feugiat in fermentum posuere urna nec tincidunt praesent. Lorem mollis aliquam ut porttitor leo. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Magna fringilla urna porttitor rhoncus.",
          },
        ];
        return (
          <React.Fragment>
            {AppData3.map((app) => (
              <div className="m-4 container row border border-light border-4 rounded-3">
                <img
                  src={app.imgsrc}
                  style={{ width: "12rem" }}
                  className="img-thumbnail m-3 "
                ></img>
                <h2 className="bg-light m-3 " style={{ width: "12rem" }}>
                  {app.title}
                  <br />
                  <i style={{ fontSize: "1.5rem" }} className="m-3">
                    {app.category}
                  </i>
                  <br />
                  <i style={{ fontSize: "1rem" }} className="m-3">
                    {app.Version}
                  </i>
                </h2>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.downs}</h4> Downloads
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.rating}</h4> from {app.rates} rates
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.category}</h4> category
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.size}</h4> size{" "}
                </span>
                <button
                  className="btn btn-success m-3 mt-5 w-50 mx-auto"
                  style={{ fontSize: "1rem" }}
                >
                  <b>Download</b>
                </button>
              </div>
            ))}
            <Divider />
            {AppData3.map((app) => (
              <div className="container m-4 border border-light border-4 rounded-3">
                <p>{app.text1}</p>
                <span className="visually-hidden" id="MLText">
                  <p> {app.text2}</p>
                  <p> {app.text3}</p>
                  <p> {app.text4}</p>
                </span>
                <button onClick={this.readMLB} id="ReadMLB">
                  Read more
                </button>
              </div>
            ))}
            <Divider />
            <div className="list-group m-3">
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person-fill.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 1</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">
                      Good and entertaining game and I liked it.
                    </p>
                  </div>
                  <small className="opacity-50 text-nowrap">3 days ago</small>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 2</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">I love this game!</p>
                  </div>
                  <small className="opacity-50 text-nowrap">4 days ago</small>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person-fill.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 3</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">
                      it's a normal game not so perfect.
                    </p>
                  </div>
                  <small className="opacity-50 text-nowrap">1 week ago</small>
                </div>
              </a>
            </div>
            <Divider />
            <div>
              <i className="m-3"> Similar Apps</i>
              <AppCard />
            </div>
          </React.Fragment>
        );
      case "puzzleGame":
        const AppData4 = [
          {
            imgsrc: "http://localhost:3000/puzzle.png",
            title: "Puzzle Game",
            link: "/application?puzzleGame",
            category: "Puzzle",
            Version: "Version 3.8.4",
            downs: "86000",
            rating: "4.3",
            rates: "23K",
            size: "35 MG",
            text1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Egetnulla facilisi etiam dignissim diam quis enim lobortis.",
            text2:
              "Mauris sitamet massa vitae tortor. Integer quis auctor elit sed. Eget nullafacilisi etiam dignissim diam quis enim. Ut etiam sit amet nislpurus in. Molestie ac feugiat sed lectus.",
            text3:
              "Quam viverra orci sagittis eu. Sit amet luctus venenatis lectus magna fringilla. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Et molestie ac feugiat sed lectus vestibulum. Neque egestas congue quisque egestas diam in arcu cursus euismod. Enim facilisis gravida neque convallis a. Posuere ac ut consequat semper. Pretium viverra suspendisse potenti nullam ac.",
            text4:
              "Feugiat in fermentum posuere urna nec tincidunt praesent. Lorem mollis aliquam ut porttitor leo. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Magna fringilla urna porttitor rhoncus.",
          },
        ];
        return (
          <React.Fragment>
            {AppData4.map((app) => (
              <div className="m-4 container row border border-light border-4 rounded-3">
                <img
                  src={app.imgsrc}
                  style={{ width: "12rem" }}
                  className="img-thumbnail m-3 "
                ></img>
                <h2 className="bg-light m-3 " style={{ width: "12rem" }}>
                  {app.title}
                  <br />
                  <i style={{ fontSize: "1.5rem" }} className="m-3">
                    {app.category}
                  </i>
                  <br />
                  <i style={{ fontSize: "1rem" }} className="m-3">
                    {app.Version}
                  </i>
                </h2>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.downs}</h4> Downloads
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.rating}</h4> from {app.rates} rates
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.category}</h4> category
                </span>
                <span className="badge bg-info col m-3 mt-5 ">
                  <h4 className="mt-4">{app.size}</h4> size{" "}
                </span>
                <button
                  className="btn btn-success m-3 mt-5 w-50 mx-auto"
                  style={{ fontSize: "1rem" }}
                >
                  <b>Download</b>
                </button>
              </div>
            ))}
            <Divider />
            {AppData4.map((app) => (
              <div className="container m-4 border border-light border-4 rounded-3">
                <p>{app.text1}</p>
                <span className="visually-hidden" id="MLText">
                  <p> {app.text2}</p>
                  <p> {app.text3}</p>
                  <p> {app.text4}</p>
                </span>
                <button onClick={this.readMLB} id="ReadMLB">
                  Read more
                </button>
              </div>
            ))}
            <Divider />
            <div className="list-group m-3">
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person-fill.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 1</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">
                      Good and entertaining game and I liked it.
                    </p>
                  </div>
                  <small className="opacity-50 text-nowrap">3 days ago</small>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 2</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">I love this game!</p>
                  </div>
                  <small className="opacity-50 text-nowrap">4 days ago</small>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src="http://localhost:3000/bootstrap-icons-1.8.1/person-fill.svg"
                  alt="twbs"
                  width="32"
                  height="32"
                  className="rounded-circle flex-shrink-0"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">User 3</h6>
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg"
                      alt="twbs"
                      width="25"
                      height="25"
                      className="rounded-circle flex-shrink-0"
                    />
                    <p className="mb-0 opacity-75">
                      it's a normal game not so perfect.
                    </p>
                  </div>
                  <small className="opacity-50 text-nowrap">1 week ago</small>
                </div>
              </a>
            </div>
            <Divider />
            <div>
              <i className="m-3"> Similar Apps</i>
              <AppCard />
            </div>
          </React.Fragment>
        );

      default:
        return <i>Error: app not found!</i>;
    }
  }
}

export default Details;
