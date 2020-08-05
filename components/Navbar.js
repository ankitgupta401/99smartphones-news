const handleSidebar = () => {
  console.log("Clicked");
  let element = document.getElementById("nav");
  element.classList.toggle("Open");
};

const Navbar = () => {
  return (
    <>
      <div id="nav">
        <p>Hello</p>
        <p>Hello2</p>
        <p>Hello3</p>
        <p>Hello4</p>
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
                  <div className="sub-ul" style={{ display: "flex" }}>
                    <div className="sub-u">
                      <p>Sub Li Tag</p>
                      <p>Sub Li Tag</p>
                      <p>Sub Li Tag</p>
                      <p>Sub Li Tag</p>
                      <p>Sub Li Tag</p>
                      <p>Sub Li Tag</p>
                    </div>
                  </div>
                </li>
                <li>
                  <a>Sub Section</a>
                  <div className="sub-ul">
                    <div className="sub-u">
                      <p>Sub Li Tag</p>
                      <p>Sub Li Tag</p>
                      <p>Sub Li Tag</p>
                      <p>Sub Li Tag</p>
                      <p>Sub Li Tag</p>
                      <p>Sub Li Tag</p>
                    </div>
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
    </>
  );
};

export default Navbar;
