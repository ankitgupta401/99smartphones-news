const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <nav className="navbar">
          <div className="li-div">
            <ul>
              <li className="navbar-li">
                <a>Home</a>
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
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-google-plus-g"></i>
            <i className="fab fa-behance"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="material-icons">search</i>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
