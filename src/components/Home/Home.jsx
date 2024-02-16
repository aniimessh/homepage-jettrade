import { NavLink } from "react-router-dom";
import "../Home/home.css";
import ForexTricker from "../Trading Chart/ForexTicker";
import profile from '../../assets/profilepic.png'

export const Home = () => {
  return (
    <div>
      <div className="home_container">
        <div className="home_heading1">
          <div className="forex-ticker d-block">
            <p>
              ETHUSDT see forex chart{" "}
              <NavLink to={"/chart"} target="_blank">
                View
              </NavLink>
            </p>
            <marquee behavior="" direction="">
              <ForexTricker />
            </marquee>
          </div>
          WELCOME TO
          <p className="jettrade-fx">JETTRADE FX</p>
          <div className="jettrade">
            <p>ADVANCE & SMART FOREX TRADING PLATFORM</p>
          </div>
          <div className="home-footer">
            <p>PARTNER WITH CENTUM WORLD</p>
          </div>
          <div className="imagecontainer">
            <div className="trader-div">
              <a
                href="http://trader.jettradefx.in/user-login"
                className="trader-link"
              >
                <img
                  src={profile}
                  className="trader-img"
                  height={50}
                  width={50}
                />
                <div>
                  <span className="trader">I am a Trader</span>
                </div>
              </a>
            </div>

            <div className="trader-div">
              <a
                href="http://refferal.jettradefx.in/member-login"
                className="trader-link"
              >
                <img
                  src={profile}
                  className="trader-img"
                  height={50}
                  width={50}
                />
                <div>
                  <span className="trader">I am a Referral</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
