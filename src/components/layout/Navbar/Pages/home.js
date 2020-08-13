import React from "react";
import "./home.css";
import Typical from "react-typical";

const home = () => {
  return (
    <div className="home-page">
      <header className="home-page-header">
        <img
          src="https://scontent.fcpt1-1.fna.fbcdn.net/v/t1.0-9/p843x403/107498932_588458995149692_4203370111792637011_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_eui2=AeHe_KUCCW7KhqBZCel8JyVrG5RtvTBLdn4blG29MEt2fgsg_m137dX32XG83lGW80TTojV0HfKfSuR7mG4cgJgM&_nc_ohc=S6ncIMlpDhgAX-B4Xoe&_nc_ht=scontent.fcpt1-1.fna&_nc_tp=6&oh=da4f13b5a1d22be44396cc2e97aeb054&oe=5F42B11C"
          className="home-page-header-logo"
          alt=""
        />
        <h1 className="heading">
          Portfolio of Nathan Swartz
        </h1>
        <p>I'm a {" "}
            <Typical
                loop = {Infinity}
                wrapper = "b"
                steps = {[
                    "developer 💻",1000,
                    "Music lover 🎵",1000,
                    "Sports lover 🥋",1000,
                    "Essential worker 😷",1000,
                    "future Entrprenuer 💰",1000
                ]}
                />
        </p>
      </header>
    </div>
  );
};

export default home;
