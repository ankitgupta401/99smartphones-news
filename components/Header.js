
const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="sub-header">
          <div className="container">
            <div className="row">
              <h6 className="text-danger">BREAKING NEWS</h6>
              <p><marquee>Some description in the sub header with date</marquee></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid secondhead">
        <div className="sub-header-second">
          <div className="container">
            <div className="row justify-content">
              <div className="date">
                <p className="fa fa-calendar" aria-hidden="true">18, July 2020</p>
              </div>
              <div className="contact">
                <a href="#">
                  <i className="fa fa-address-book" aria-hidden="true"></i> Contact
                </a>
                <a href="#">
                  <i className="fa fa-heart" aria-hidden="true"></i> 99Smartphones News
                </a>
                <a href="#">
                  <i className="fa fa-newspaper-o" aria-hidden="true"></i> About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <div className="container">
            {/* <div className="log"> */}
            <img className="log" src="images/newslogo99.png"/>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
