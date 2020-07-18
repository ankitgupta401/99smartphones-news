const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="sub-header">
          <div className="container">
            <div className="row">
              <h6>BREAKING NEWS</h6>
              <p>Some description in the sub header with date</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="sub-header-second">
          <div className="container">
            <div className="row justify-content">
              <div className="date">
                <p>18, July 2020</p>
              </div>
              <div className="contact">
                <a href="#">
                  <i className="far fa-envelope-open"></i> Contact
                </a>
                <a href="#">
                  <i className="fas fa-heart"></i> 99Smartphones News
                </a>
                <a href="#">
                  <i className="far fa-newspaper"></i> About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <div className="container">
            <h1>Logo</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
