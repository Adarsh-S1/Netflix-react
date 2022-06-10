import React, { useEffect, useState } from "react";
import "../Userhome/Userhome.css";
import Navbar from "../../Assets/navbar/Navbar";
import { Button } from "react-bootstrap";
import {  tmdb } from "../../axios/axios";
import { apiKEY, imgURL } from "../../axios/tmdb";
import Originals from "./Rowposts/Originals";
import Horror from "./Rowposts/Horror";
import Comedy from "./Rowposts/Comedy";

function Userhome() {

  const [bannerMovie, setbannerMovie] = useState("");
 
  useEffect(() => {
    tmdb
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKEY}&language=en-US`
      )
      .then((response) => {
        setbannerMovie(
          response.data.results[Math.floor(Math.random() * 20 + 1)]
        );
      });

  
  }, []);
  
  return (
    <div className="userhomeparent">
      <div
        style={{
          backgroundImage: `url(${
            bannerMovie ? imgURL + bannerMovie.backdrop_path : ""
          })`,
        }}
        className="userhomebanner"
      >
        <Navbar></Navbar>
        <div className="moviedetails">
          <h1 className="movietitle">
            {" "}
            {bannerMovie ? bannerMovie.title : ""}
          </h1>
          <h3 className="moviebuttons">
            <Button className="playButton">
              <img src="../../userhome/play.png" alt="" />
              &nbsp;&nbsp;Play
            </Button>
            &nbsp;&nbsp;
            <Button className="infoButton">More Info</Button>
          </h3>
          <div className="moviedetails1">
            {bannerMovie ? bannerMovie.release_date : ""} &nbsp;| &nbsp;
            <span>
              {" "}
              {bannerMovie ? (bannerMovie.adult ? "18 +" : "U / A") : ""}
            </span>{" "}
            &nbsp;|&nbsp; {bannerMovie ? bannerMovie.media_type : ""}
          </div>
          <div className="description">
            <h6>{bannerMovie ? bannerMovie.overview : ""}</h6>
          </div>
        </div>
      </div>
      <Originals />
      <Horror />
      <Comedy />
      
     
    </div>
  )
}

export default Userhome;
