import fetch from "node-fetch";

const Header = (props) => (
  <div className="container-fluid">
    <div className="navbar-div">
      <ul className="navbar-ul">
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
    {console.log(props)}
  </div>
);

export default Header;
