import "../style.css";
import Router from "next/router";

import HashLoader from "react-spinners/HashLoader";

// This default export is required in a new `pages/_app.js` file.

//Binding events.

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  Router.events.on("routeChangeStart", () => loadOn());
  Router.events.on("routeChangeComplete", () => {
    loadOff();
  });
  Router.events.on("routeChangeError", () => {
    loadOff();
  });

  const loadOn = () => {
    setLoading((prevLoading) => {
      return true;
    });
  };
  const loadOff = () => {
    setLoading((prevLoading) => {
      return false;
    });
  };

  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "550px",
      }}
    >
      <HashLoader size={150} color={"#F9B304"} loading={loading}></HashLoader>
    </div>
  ) : (
    <Component {...pageProps} />
  );
}
