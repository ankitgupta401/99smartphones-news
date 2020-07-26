import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => (
  <>
    <Head>
      <title>99Smartphones News</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      />
      <link
        ref="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
    </Head>
    <Header {...props.header} />
    <Navbar data={props.navbar}/>
    {props.children}
    <Footer />
  </>
);

export default Layout;
