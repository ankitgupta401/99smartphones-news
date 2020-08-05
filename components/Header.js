import Link from "next/link";
import moment from "moment";

// const interval = () => {
//   let time = setInterval(() => {
//     moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
//   }, 1000);
//   return time;
// };

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="sub-header">
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
        </div>
      </div>
      <div className="container-fluid">
        <div className="sub-header-second">
          <div className="container">
            <div
              className="row justify-content"
              style={{ padding: "0px 15px" }}
            >
              <div className="date">
                <a>
                  <i
                    className="text-danger fa fa-calendar"
                    aria-hidden="true"
                  ></i>
                  <div id="time"></div>
                  
                </a>
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
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <div className="container">
            <Link href="/">
              <a>
                <h1 style={{ lineHeight: "100px", color: "black" }}>99 News</h1>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
