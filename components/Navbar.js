import Link from "next/link";

import { useEffect } from "react";
;
import { SearchMobile } from "./SearchMobile";

const handleSidebar = () => {
  let element = document.getElementById("nav");
  element.classList.toggle("Open");
};

const handleBackdrop = () => {
  let element = document.getElementById("nav");
  element.classList.remove("Open");
};

const mobileOpen = () => {
  let element = document.getElementById("mobile-nav");
  element.classList.toggle("mobile-nav-open");
};

const Navbar = (props) => {
  useEffect(() => {
    startTime();
    getDate();
  }, []);

  const getDate = () => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    if (!document.getElementById("dateNav")) {
      return;
    } else {
      document.getElementById("dateNav").innerHTML =
        months[month] + " " + day + ", " + year + "  ";
    }
  };

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startTime() {
    var today = new Date();
    var day = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    if (!document.getElementById("timeNav")) {
      return;
    } else {
      document.getElementById("timeNav").innerHTML =
        " " + h + ":" + m + ":" + s;
      let t = setTimeout(function () {
        startTime();
      }, 1000);
    }
  }

  return (
    <>
      <div id="nav">
        <h1 style={{ color: "#000", padding: "0px 0px 0px 20px" }}>
        <img src="/images/logo3.jpeg" style={{ width: "70px"}} ></img>  Blogs
        </h1>
        <div
       style={{ color: "#000", paddingLeft:"50px" }}
       >
            <a
               href="https://www.facebook.com/99smartphones.in"
               target="_blank"
             >
               <img
                 className="social-icon"
                 src="/images/icons8-facebook-480.png"
                 alt="facebook"
               />
             </a>
             <a  href="https://twitter.com/99Smartphones"
               target="_blank"
               rel="noopener">
               <img
                 className="social-icon"
                 src="/images/icons8-twitter-480.png"
                 alt="twitter"
               />
             </a>

             <a  href="https://www.instagram.com/99smartphones/?hl=en"
               target="_blank"
               rel="noopener">
               <img
                 className="social-icon"
                 src="/images/icons8-instagram-512.png"
                 alt="instagram"
               />
             </a>

       
       </div>
      <br/>

     <SearchMobile/>


    
      <br/>
         <Link href="/">
          <a className="mobile-nav-link">Home</a>
        </Link>
        <a className="mobile-nav-link" onClick={mobileOpen}>
          Categories
        </a>
        <div id="mobile-nav">

          {props.data.map((val, i) => {
            return (
              <Link  key={i} href="/[pid]"
              as={"/" + val.category} >
                <a className="navbar-link mobile">{val.category.split("-").join(" ")}</a>
              </Link>
            );
          })}
        </div>
  
      </div>
      <div className="burger" id="burgerId" onClick={handleSidebar}>
        <i aria-hidden className="burger-icon fa fa-bars"></i>
      </div>

      <div onClick={handleBackdrop} className="container-fluid-navq">
        <div className="container">
          <nav className="navbar">
            <div className="li-div">
              <ul>
              <Link href="/">
              <a>
                <li>
                   Home 
                </li>
                </a>
                </Link>
                <li>
                  <Link href="/">
                    <a>Categories</a>
                  </Link>
                  <div className="sub-ul">
                    <div className="sub-u">
                      {props.data.map((val, i) => {
                        return (
                          <Link key={i} href="/[pid]"
                          as={"/" + val.category} >
                            <a className="navbar-link">{val.category.split("-").join(" ")}</a>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>

   
              </ul>
            </div>
 
            <div className="icon-div">
            <a
                href="https://www.facebook.com/99smartphones.in"
                target="_blank"
              >
                <img
                  className="social-icon"
                  src="/images/icons8-facebook-480.png"
                  alt="facebook"
                />
              </a>
              <a  href="https://twitter.com/99Smartphones"
                target="_blank"
                rel="noopener">
                <img
                  className="social-icon"
                  src="/images/icons8-twitter-480.png"
                  alt="twitter"
                />
              </a>

              <a  href="https://www.instagram.com/99smartphones/?hl=en"
                target="_blank"
                rel="noopener">
                <img
                  className="social-icon"
                  src="/images/icons8-instagram-512.png"
                  alt="instagram"
                />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
