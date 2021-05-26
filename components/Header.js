import Link from "next/link";
import moment from "moment";
import { useEffect } from "react";

const Header = (props) => {
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
    document.getElementById("date").innerHTML =
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

    if (!document.getElementById("time")) {
      return;
    } else {
      document.getElementById("time").innerHTML = " " + h + ":" + m + ":" + s;
      let t = setTimeout(function () {
        startTime();
      }, 1000);
    }
  }

  return (
    <>
      <div className="container-fluid">
        {/* <div className="sub-header">
          <div className="container">
            <div className="row">
              <h6 className="text-danger">BREAKING NEWS</h6>
              <p>
                <marquee direction="up" scrolldelay="140">
                  Some description in the sub header with date
                </marquee>
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="container-fluid">
        <div className="sub-header-second">
          <div className="container">
            <div
              className="row justify-content"
              style={{ padding: "0px 15px" }}
            >
              <div className="date">
                <i
                  className="text-danger fa fa-calendar"
                  aria-hidden="true"
                ></i>
                <a id="date"></a>
                <a id="time"></a>
              </div>
              <div className="contact">
                <a href="#">
                  <i
                    className="text-danger fa fa-address-book"
                    aria-hidden="true"
                  ></i>{" "}
                  Contact
                </a>
                <a href="#">
                  <i
                    className="text-danger fa fa-newspaper-o"
                    aria-hidden="true"
                  ></i>{" "}
                  About
                </a>
              </div>
            </div>
            <hr/>
          </div>
          
        </div>
       
      </div>
      <br/>
      <div className="main-header">
        <div className="logo">
          <div className="container">
            <div>
              <Link href="/">
                <a>
                  <span
                    style={{
                      lineHeight: "100px",
                      color: "black",
                      width: "200px",
                      fontSize: "50px",
                    }}
                  >
                    99 News
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
