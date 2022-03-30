import React, { Component } from "react";
import Divider from "./Divider";
import AppCard from "./applicationPreview";

class Details extends Component {
  state = {};
  readMLB (){
    let moreText = document.getElementById("MLText").className;
    let btnText = document.getElementById("ReadMLB");

    if(moreText === "visually-hidden"){
      moreText = "";
      btnText.textContent = "Read less";
      document.getElementById("MLText").className = moreText;
    }
    else{
      moreText = "visually-hidden";
      document.getElementById("MLText").className = moreText;
      btnText.textContent = "Read more";
    }

  }
  render() {
    return (
      <React.Fragment>
        <div className="m-4 container row border border-light border-4 rounded-3">
          <img
            src="http://localhost:3000/gun.jpg"
            style={{ width: "12rem" }}
            className="img-thumbnail m-3 "
          ></img>
          <h2 className="bg-light m-3 " style={{ width: "12rem" }}>
            Gun Game
            <br/><i style={{ fontSize: "1.5rem" }} className="m-3">Action</i>
            <br/><i style={{ fontSize: "1rem" }} className="m-3">Version 1.3.9</i>
          </h2>
          <span className="badge bg-info col m-3 mt-5 ">
            <h4 className="mt-4">25000</h4> Downloads
          </span>
          <span className="badge bg-info col m-3 mt-5 ">
            <h4 className="mt-4">4.1</h4> from 8760 rates
          </span>
          <span className="badge bg-info col m-3 mt-5 ">
            <h4 className="mt-4">Action</h4> category
          </span>
          <span className="badge bg-info col m-3 mt-5 ">
            <h4 className="mt-4">47 MB</h4> size{" "}
          </span>
          <button
            className="btn btn-success m-3 mt-5 w-50 mx-auto"
            style={{ fontSize: "1rem" }}
          >
            <b>Download</b>
          </button>
        </div>
        <Divider />
        <div className="container m-4 border border-light border-4 rounded-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
            nulla facilisi etiam dignissim diam quis enim lobortis. Mauris sit
            amet massa vitae tortor. Integer quis auctor elit sed. Eget nulla
            facilisi etiam dignissim diam quis enim. Ut etiam sit amet nisl
            purus in. Molestie ac feugiat sed lectus.</p><span className="visually-hidden" id="MLText" ><p> Quam viverra orci sagittis
            eu. Sit amet luctus venenatis lectus magna fringilla. Purus ut
            faucibus pulvinar elementum integer enim neque volutpat ac. Et
            molestie ac feugiat sed lectus vestibulum. Neque egestas congue
            quisque egestas diam in arcu cursus euismod. Enim facilisis gravida
            neque convallis a. Posuere ac ut consequat semper. Pretium viverra
            suspendisse potenti nullam ac. Feugiat in fermentum posuere urna nec
            tincidunt praesent. Lorem mollis aliquam ut porttitor leo. Cras
            fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Magna
            fringilla urna porttitor rhoncus.</p><p> Enim tortor at auctor urna nunc id
            cursus. Porta nibh venenatis cras sed felis eget velit aliquet
            sagittis. Dignissim convallis aenean et tortor at risus viverra
            adipiscing at. Suscipit adipiscing bibendum est ultricies integer
            quis. Lacus luctus accumsan tortor posuere. Massa enim nec dui nunc.
            Sit amet massa vitae tortor condimentum. Tristique sollicitudin nibh
            sit amet commodo nulla facilisi nullam. Orci sagittis eu volutpat
            odio. Sed turpis tincidunt id aliquet risus feugiat in ante metus.
            Diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet
            tellus cras adipiscing enim eu turpis. Vel eros donec ac odio tempor
            orci dapibus ultrices. Suspendisse sed nisi lacus sed viverra tellus
            in hac habitasse. Cursus metus aliquam eleifend mi.</p><p> Commodo nulla
            facilisi nullam vehicula ipsum a arcu cursus. Risus nec feugiat in
            fermentum posuere urna nec tincidunt. At tempor commodo ullamcorper
            a. At risus viverra adipiscing at in tellus. Volutpat lacus laoreet
            non curabitur gravida. Semper auctor neque vitae tempus quam
            pellentesque nec nam aliquam. Tempor commodo ullamcorper a lacus
            vestibulum sed arcu. Porttitor eget dolor morbi non arcu. At tellus
            at urna condimentum. Orci phasellus egestas tellus rutrum tellus
            pellentesque. A lacus vestibulum sed arcu non odio euismod lacinia.
            Ut ornare lectus sit amet. Enim diam vulputate ut pharetra sit amet
            aliquam. A erat nam at lectus.</p><p> Augue interdum velit euismod in. Quam
            quisque id diam vel. Mattis enim ut tellus elementum sagittis vitae
            et. Nullam non nisi est sit amet facilisis magna. Rhoncus urna neque
            viverra justo nec ultrices dui. Quisque non tellus orci ac.
            Elementum tempus egestas sed sed. Turpis massa sed elementum tempus
            egestas sed sed risus pretium. Felis bibendum ut tristique et
            egestas quis ipsum suspendisse ultrices. Sit amet dictum sit amet
            justo. Vitae nunc sed velit dignissim sodales. Pellentesque pulvinar
            pellentesque habitant morbi tristique senectus et.</p>
          </span>
          <button onClick={this.readMLB} id="ReadMLB">Read more</button>
        </div>
        <Divider />
        <div className="list-group m-3">
  <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="http://localhost:3000/bootstrap-icons-1.8.1/person-fill.svg" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">User 1</h6>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <p className="mb-0 opacity-75">Good and entertaining game and I liked it.</p>
      </div>
      <small className="opacity-50 text-nowrap">3 days ago</small>
    </div>
  </a>
  <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="http://localhost:3000/bootstrap-icons-1.8.1/person.svg" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">User 2</h6>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <p className="mb-0 opacity-75">I love this game!</p>
      </div>
      <small className="opacity-50 text-nowrap">4 days ago</small>
    </div>
  </a>
  <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
    <img src="http://localhost:3000/bootstrap-icons-1.8.1/person-fill.svg" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0"/>
    <div className="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 className="mb-0">User 3</h6>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star-fill.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <img src="http://localhost:3000/bootstrap-icons-1.8.1/star.svg" alt="twbs" width="25" height="25" className="rounded-circle flex-shrink-0"/>
        <p className="mb-0 opacity-75">it's a normal game not so perfect.</p>
        
      </div>
      <small className="opacity-50 text-nowrap">1 week ago</small>
    </div>
  </a>
</div>
<Divider/>
<div>
  <i className="m-3"> Similar Apps</i>
<AppCard/>
</div>

      </React.Fragment>
    );
  }
}

export default Details;
