const Navbar = () => {
  
  return (
    <div className="container-fluid-navq">
      <div className="container">
        <nav className="navbar">
          <div className="li-div">
            <ul>
              <li className="navbar-li">
                <a className="text-danger">Home</a>
                <div className="sub-ul">
                  <li>Sub Li Tag</li>
                  <li>Sub Li Tag</li>
                  <li>Sub Li Tag</li>
                  <li>Sub Li Tag</li>
                  <li>Sub Li Tag</li>
                  <li>Sub Li Tag</li>
                </div>
              </li>
              <li>
                <a>Sub Section</a>
                <div className="sub-ul">
                  <li>Sub Li Tag</li>
                  <li>Sub Li Tag</li>
                  <li>Sub Li Tag</li>
                  <li>Sub Li Tag</li>
                  <li>Sub Li Tag</li>
                  <li>Sub Li Tag</li>
                </div>
              </li>
              <li>Posts</li>
              <li>Post Archives</li>
              <li>Shop</li>
              <li>Pages</li>
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
  );
};

export default Navbar;
