import React from "react";
import Youtube from "react-youtube";
import "./Watchmovie.css";
function Watchmovie() {
  return (
    <div className="movieparentdiv">
      {localStorage.getItem("Trailer") ? (
        <Youtube
          allowfullscreen="allowfullscreen"
          opts={{
            height: "555px",
            width: "1180px",
            playerVars: { autoplay: 1 },
          }}
          videoId={localStorage.getItem("Trailer")}
        />
      ) : (
        <img src="../../Watchmovie/Nomovie.jpg" alt=""></img>
      )}
    </div>
  );
}

export default Watchmovie;
