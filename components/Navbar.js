import Link from "next/link";
import moment from "moment";
import { useEffect } from "react";

const handleSidebar = () => {
  console.log("Clicked");
  let element = document.getElementById("nav");
  element.classList.toggle("Open");
};

const handleCol = () => {
  let element = document.getElementById("col");
  element.classList.toggle("open");
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
    document.getElementById("dateNav").innerHTML =
      months[month] + " " + day + ", " + year + "  ";
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
    document.getElementById("timeNav").innerHTML = " " + h + ":" + m + ":" + s;
    let t = setTimeout(function () {
      startTime();
    }, 1000);
  }
  return (
    <>
      <div id="nav">
        <a id="dateNav"></a>
        <br />
        <a id="timeNav"></a>
        <p onClick={handleCol}>Hello
          <div id="col">Hi</div>
        </p>
      </div>
      <div className="container-fluid-navq">
        <div className="container">
          <div className="burger" id="burgerId" onClick={handleSidebar}>
            <i className="burger-icon fa fa-bars"></i>
          </div>
          <nav className="navbar">
            <div className="li-div">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>News Categories</a>
                  <div className="sub-ul">
                    <div className="sub-u">
                      <p>Smart Watches</p>
                      <p>Linux</p>
                      <p>Windows</p>
                      <p>IOS</p>
                      <p>Android</p>
                      <p>Applications</p>
                      <p>Smart Band</p>
                      <p>Smart Glasses</p>
                      <p>India</p>
                      <p>World</p>
                      <p>Entertainment</p>
                      <p>Technology</p>
                      <p>Mobiles</p>
                      <p>Laptops</p>
                      <p>Gadgets</p>
                      <p>Business</p>
                      <p>Games</p>

                    </div>
                  </div>
                </li>
                <li>Compare</li>
                <li>Product Finder</li>
                <li>Deals</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div className="icon-div">
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-google-plus" aria-hidden="true"></i>
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
              <i className="fa fa-search " aria-hidden="true"></i>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
