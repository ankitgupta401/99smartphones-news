import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

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
    </Head>
    <Header {...props.header} />
    <div className="container-fluid"></div>
    {props.children}
    <Footer />
  </>
);

export default Layout;
