import fetch from "node-fetch";

const Header = (props) => (
  <div className="container-fluid">
    <div className="navbar-div">
      <ul className="navbar-ul">
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
    {console.log(props.newsNav)}
  </div>
);

Header.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://blog.99smartphones.in/api/common/common_get_with_table_name",
    {
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        table: "news_navbar",
        data: {},
      }),
      //Adding header to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  let json = await res.json();

  return { newsNav: json };
};

export default Header;
