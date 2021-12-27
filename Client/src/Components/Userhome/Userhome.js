import React, { useEffect, useState } from "react";
import "../Userhome/Userhome.css";
import Navbar from "../../Assets/navbar/Navbar";
import Youtube from "react-youtube";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { client, tmdb } from "../../axios/axios";
import { apiKEY, imgURL } from "../../axios/tmdb";

function Userhome() {
  const history = useHistory();

  const [bannerMovie, setbannerMovie] = useState("");
  const [trendingMovies, settrendingMovies] = useState([]);
  const [actionMovies, setactionMovies] = useState([]);
  const [horrorMovies, sethorrorMovies] = useState([]);
  const [originalMovies, setoriginalMovies] = useState([]);
  const [comedyMovies, setcomedyMovies] = useState([]);
  const [romanceMovies, setromanceMovies] = useState([]);
  const [documentryMovies, setdocumentryMovies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [Hidden, setHidden] = useState(false);
  const [Trailer, setTrailer] = useState([]);
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

    tmdb
      .get(`trending/all/week?api_key=${apiKEY}&language=en-US`)
      .then((response) => {
        settrendingMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    tmdb
      .get(`discover/movie?api_key=${apiKEY}&with_genres=28`)
      .then((response) => {
        setactionMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    tmdb
      .get(`discover/tv?api_key=${apiKEY}&with_networks=213`)
      .then((response) => {
        setoriginalMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    tmdb
      .get(`discover/movie?api_key=${apiKEY}&with_genres=35`)
      .then((response) => {
        setcomedyMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    tmdb
      .get(`discover/movie?api_key=${apiKEY}&with_genres=27`)
      .then((response) => {
        sethorrorMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    tmdb
      .get(`discover/movie?api_key=${apiKEY}&with_genres=10749`)
      .then((response) => {
        setromanceMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    tmdb
      .get(`discover/movie?api_key=${apiKEY}&with_genres=99`)
      .then((response) => {
        setdocumentryMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function movieTrailer(id) {
    tmdb
      .get(`/movie/${id}/videos?api_key=${apiKEY}&language=en-US`)
      .then((res) => {
        setTrailer(res.data.results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function watch(id) {
    tmdb
      .get(`/movie/${id}/videos?api_key=${apiKEY}&language=en-US`)
      .then((res) => {
        localStorage.setItem("Trailer", res.data.results[0].key);

        history.push({
          pathname: "/watchmovie",
        });
      })
      .catch((err) => {
                localStorage.setItem("Trailer", "");

        history.push({
          pathname: "/watchmovie",
        });
        console.log(err);
      });
  }
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
      <div className="originals">
        <h2>Originals</h2>
        <div className="moviecard">
          {originalMovies.map((obj, index) => (
            <div className="moviecard2">
              {editIndex === index && !Hidden ? (
                ""
              ) : (
                <svg className="logoposter" viewBox="0 0 111 30">
                  <path
                    d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                    fill="#e50f14"
                  ></path>
                </svg>
              )}
              {editIndex === index && (
                <div>
                  <br />
                  {Trailer && (
                    <Youtube
                      opts={{
                        height: "160px",
                        width: "auto",
                        playerVars: { autoplay: 0 },
                      }}
                      videoId={Trailer.key}
                    />
                  )}
                </div>
              )}
              {editIndex === index && !Hidden ? (
                Trailer ? (
                  ""
                ) : (
                  <img src="../../userhome/notrailer.jpg" />
                )
              ) : (
                <img
                  className="originalimg"
                  src={`${imgURL + obj.backdrop_path}`}
                  alt=""
                />
              )}
              {editIndex === index && !Hidden ? (
                ""
              ) : (
                <center>
                  {" "}
                  <Button
                    onClick={(e) => {
                      watch(obj.id);
                    }}
                    className="watchbutton"
                  >
                    <img src="../../userhome/playWhite.png" alt="" />
                    Watch
                  </Button>
                  <Button
                    onClick={() => {
                      setEditIndex((editIndex) =>
                        editIndex === index ? null : index
                      );
                      {
                        {
                          editIndex === index && setHidden(true);
                          movieTrailer(obj.id);
                        }
                      }
                    }}
                    className="trailerbutton"
                  >
                    <img src="../../userhome/clapperboard.png" alt="" />
                    Trailer
                  </Button>
                </center>
              )}
              {editIndex === index && !Hidden ? "" : <h3>{obj.name}</h3>}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="form">
        <div className="form1">
          <form>
            <div className="form3">
              <div className="logo">
                <svg width="auto" height="60px" viewBox="0 0 111 30">
                  <path
                    d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                    fill="#e50f14"
                  ></path>
                </svg>
              </div>
              <h3 className="formhead">
                <span>Let us know about you !</span>
              </h3>
              <div>
                <div className="form4">
                  <label for="email"></label>
                  <div className="form5">
                    <div className="form6">
                      <div className="form7">
                        <input
                          autoFocus
                          name="Name"
                          type="text"
                          autocomplete="Name"
                          placeholder="Name"
                          className="emailinput"
                        />
                        <div className="form8"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form4">
                  <label for="email"></label>
                  <div className="form5">
                    <div className="form6">
                      <div className="form7">
                        <input
                          name="Phone"
                          type="tel"
                          autocomplete="tel"
                          placeholder="Phone"
                          className="emailinput"
                        />
                        <div className="form8"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form4">
                  <label for="email"></label>
                  <div className="form5">
                    <div className="form6">
                      <div className="form7">
                        <input
                          name="Phone"
                          type="date"
                          autocomplete="tel"
                          placeholder="Phone"
                          className="emailinput"
                        />
                        <div className="form8"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form4">
                  <label for="email"></label>
                  <div className="form5">
                    <div className="form6">
                      <div className="form7">
                        <input
                          name="Adress"
                          type="text"
                          autocomplete="Address"
                          placeholder="Address"
                          className="emailinput"
                        />
                        <div className="form8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <button type="submit" className="buttonnext">
                <span>Login</span>
              </button>
            </div>
            <p className="info">
              <span>
                We won't reveal your email to anyone else nor use it to send you
                spam
              </span>
            </p>
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default Userhome;
