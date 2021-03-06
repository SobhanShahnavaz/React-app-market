import React, { Component } from "react";

class AppCard extends Component {
  state = {};
  render() {
    const AppData = [
      {
        imgsrc: "http://localhost:3000/gun.jpg",
        title: "Gun Game",
        link: "/application?gunGame",
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
      <div className="container">
        <div className="row">
          {AppData.map((app) => (
            <div className="col m-3">
              <div className="card" style={{ width: "12rem" }}>
                <img src={app.imgsrc} className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{app.title}</h5>
                  <p className="card-text">
                    {app.category}, {app.rating}{" "}
                    <img
                      src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg"
                      alt="rate"
                      width="15"
                      height="15"
                      className="rounded-circle flex-shrink-0"
                    />
                  </p>
                  <a href={app.link} className="btn btn-success">
                    view & download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AppCard;
