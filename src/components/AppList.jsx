import React, { Component } from "react";
import AppCard from "./applicationPreview";
import Divider from "./Divider";

class AppList extends Component {
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
      <React.Fragment>
        <h2 className="m-4">App list</h2>
        <Divider />
        <div className="list-group">
          {AppData.map((app) => (
            <a
              href="#"
              className="list-group-item list-group-item-action d-flex gap-3 py-3"
              aria-current="true"
            >
              <img
                src={app.imgsrc}
                alt="twbs"
                width="50"
                height="50"
                className="rounded-circle flex-shrink-0"
              />
              <div className="d-flex gap-2 w-100 justify-content-between">
                <div>
                  <h6 className="mb-0">
                    {app.title} , {app.category}
                  </h6>
                  <p className="mb-0 opacity-75">{app.text1}</p>
                </div>
                <small className="opacity-50 text-nowrap">{app.Version}</small>
              </div>
              <Divider />
            </a>
          ))}
          <Divider />
        </div>
      </React.Fragment>
    );
  }
}

export default AppList;
