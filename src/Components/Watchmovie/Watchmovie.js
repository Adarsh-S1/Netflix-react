import React from "react";
import Youtube from "react-youtube";
import "./Watchmovie.css";
function Watchmovie() {
  return (
    <div className="movieparentdiv">
      {localStorage.getItem("Trailer") ? (
        <Youtube
          className="youtube img-fluid"
          allowfullscreen="allowfullscreen"
          opts={{
            playerVars: { autoplay: 1 },
          }}
          videoId={localStorage.getItem("Trailer")}
        />
      ) : (
        <img
          className="img-fluid youtube"
          src="../../Watchmovie/Nomovie.jpg"
          alt=""
        ></img>
      )}
    </div>
  );
}

export default Watchmovie;
