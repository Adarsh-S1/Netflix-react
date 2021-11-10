import "./Home.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);

  return (
    <div className="homepage">
      <div className="banner">
        <div className="fadebanner" />
        <div className="header">
          <div className="header1">
            <svg viewBox="0 0 111 30" className="netflixlogo" focusable="false">
              <g id="netflix-logo">
                <path
                  fill="#e50f14"
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="header2">
            <Button onClick={(e) => { e.preventDefault(); history.push("/login");}}  className="btn-danger signin">
              Sign In
            </Button>
          </div>
        </div>
        <center>
          <h1 className="caption">Unlimited movies, TV shows and more.</h1>
          <h2 className="caption1">Watch anywhere. Cancel anytime.</h2>
          <h3 className="emailcaption">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>{" "}
        </center>
        <div className="emailform">
          <input placeholder="Email address" type="email" name="" id="" />
          <Button className="btn-danger">
            Get Started &nbsp;
            <svg viewBox="0 0 6 15">
              <path
                d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                fill="#ffff"
              ></path>
            </svg>
          </Button>
        </div>
      </div>
      <div className="card1">
        <div className="cardcaption">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h2>
        </div>
        <div className="video">
          <img
            className="tv"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          />
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="card2">
        <div className="card2images">
          <center>
            <img
              className="mainImage"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
              srcset=""
            />
            <img
              className="image2"
              src="../../home/carddesign.png"
              alt=""
              srcset=""
            />
            <img
              className="imggif"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt=""
              srcset=""
            />
          </center>
        </div>
        <div className="cardcaption2">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
      </div>
      <div className="card3">
        <div className="cardcaption3">
          <h1>Watch everywhere.</h1>
          <h2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h2>
        </div>
        <div className="video3">
          <img
            className="pc"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          />
          <video autoPlay playsInline muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="card4">
        <div className="card4images">
          <center>
            <img
              className="image4"
              src="https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
              alt=""
              srcset=""
            />
          </center>
        </div>
        <div className="cardcaption4">
          <h1>Create profiles for children.</h1>
          <h2>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h2>
        </div>
      </div>
      <div className="netflixquestions">
        <center>
          <h1>Frequently Asked Questions</h1>
        </center>
        <div className="question">
          <div className="question1">
            <h3>What is Netflix?</h3>
            <svg
              onClick={(e) => {
                e.preventDefault();
                {
                  question1 ? setQuestion1(false) : setQuestion1(true);
                }
              }}
              viewBox="0 0 26 26"
            >
              <path
                fill="white"
                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"
              ></path>
            </svg>
          </div>
          {question1 && (
            <div className="question1detail">
              <h5>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. <br />
                <br /> You can watch as much as you want, whenever you want,
                without a single ad – all for one low monthly price. There's
                always something new to discover, and new TV shows and movies
                are added every week!
              </h5>
            </div>
          )}
          <div className="question1">
            <h3>How much does Netflix cost?</h3>
            <svg
              onClick={(e) => {
                e.preventDefault();
                {
                  question2 ? setQuestion2(false) : setQuestion2(true);
                }
              }}
              viewBox="0 0 26 26"
            >
              <path
                fill="white"
                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"
              ></path>
            </svg>
          </div>
          {question2 && (
            <div className="question1detail">
              <h5>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹&nbsp;199 to ₹&nbsp;799 a month. No extra costs, no
                contracts.
              </h5>
            </div>
          )}
          <div className="question1">
            <h3>Where can I watch?</h3>
            <svg
              onClick={(e) => {
                e.preventDefault();
                {
                  question3 ? setQuestion3(false) : setQuestion3(true);
                }
              }}
              viewBox="0 0 26 26"
            >
              <path
                fill="white"
                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"
              ></path>
            </svg>
          </div>
          {question3 && (
            <div className="question1detail">
              <h5>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
                <br />
                <br />
                You can also download your favourite shows with the iOS,
                Android, or Windows 10 app. Use downloads to watch while you're
                on the go and without an internet connection. Take Netflix with
                you anywhere.
              </h5>
            </div>
          )}
          <div className="question1">
            <h3>How do I cancel?</h3>
            <svg
              onClick={(e) => {
                e.preventDefault();
                {
                  question4 ? setQuestion4(false) : setQuestion4(true);
                }
              }}
              viewBox="0 0 26 26"
            >
              <path
                fill="white"
                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"
              ></path>
            </svg>
          </div>
          {question4 && (
            <div className="question1detail">
              <h5>
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </h5>
            </div>
          )}
          <div className="question1">
            <h3>What can I watch on Netflix?</h3>
            <svg
              onClick={(e) => {
                e.preventDefault();
                {
                  question5 ? setQuestion5(false) : setQuestion5(true);
                }
              }}
              viewBox="0 0 26 26"
            >
              <path
                fill="white"
                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"
              ></path>
            </svg>
          </div>
          {question5 && (
            <div className="question1detail">
              <h5>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </h5>
            </div>
          )}
          <div className="question1">
            <h3>Is Netflix good for kids?</h3>
            <svg
              onClick={(e) => {
                e.preventDefault();
                {
                  question6 ? setQuestion6(false) : setQuestion6(true);
                }
              }}
              viewBox="0 0 26 26"
            >
              <path
                fill="white"
                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"
              ></path>
            </svg>
          </div>
          {question6 && (
            <div className="question1detail">
              <h5>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
                <br />
                <br />
                Kids profiles come with PIN-protected parental controls that let
                you restrict the maturity rating of content kids can watch and
                block specific titles you don’t want kids to see.
              </h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
