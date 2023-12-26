import { useEffect } from "react";
import { gsap, Expo } from "gsap";
import "../stylesheet/Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  useEffect(() => {
    const showNavbar = () => {
      gsap.to(".Navbarcontent", {
        duration: 0.9,
        top: "0vh",
        ease: Expo.easeInOut,
      });
    };
    showNavbar();

    return () => {};
  }, []);

  return (
    <div className="Navbarcontent">
      <div className="Logotext">
        <Link to="/" className="linkstyle">
          YOUTUBE CAPTION READER 23'
        </Link>
      </div>
      <div className="tbldata">
        <ul>
          <li className="tbl">
            <Link to="about" className="linkstyle">
              ABOUT
            </Link>
          </li>
          <li className="tbl">
            <Link to="contact" className="linkstyle">
              CONNECT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
