import React from "react";
import { Helmet } from "react-helmet";
import { Route, Link } from "react-router-dom";
import styles from "./SlidingImg.module.css";

const SlidingImg = () => {
  return (
    <div className="SlidingImg">
      <Helmet>
        <script src="./auto.js"></script>
      </Helmet>

      <div id="visual">
        <div class="on">
          <Link to="#">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/19/00/13/sea-5499649_960_720.jpg"
              alt="1"
              width="100%"
              height="100%"
            />
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://cdn.pixabay.com/photo/2020/09/28/10/07/face-mask-5609287_960_720.png"
              alt="2"
              width="100%"
              height="100%"
            />
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://cdn.pixabay.com/photo/2020/10/01/15/18/tiger-5618802_960_720.jpg"
              alt="3"
              width="100%"
              height="100%"
            />
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://cdn.pixabay.com/photo/2020/01/26/10/33/chess-4794265_960_720.jpg"
              alt="4"
              width="100%"
              height="100%"
            />
          </Link>
        </div>
        <section>
          <div id="left">
            <span></span>
            <span></span>
          </div>
          <div id="right">
            <span></span>
            <span></span>
          </div>
        </section>
        <section id="control">
          <Link to class="on" href="#"></Link>
          <Link to="#"></Link>
          <Link to="#"></Link>
          <Link to="#"></Link>
        </section>
      </div>
    </div>
  );
};

export default SlidingImg;
