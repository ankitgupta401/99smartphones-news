import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Meta from "./Meta";

const Layout = (props) => (
  <>
    <Meta meta={props.children} />
    <Head>
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
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn.quilljs.com/1.2.6/quill.snow.css"
      />
      <meta
        name="google-site-verification"
        content="We8K8T-425qt2XvSNSocsbnBOqDQLQdElUv8vw8WFQE"
      />

      <script src="/js/custom.js"></script>
      <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    </Head>
    <Header {...props.header} />
    <Navbar data={props.navbar} />
    {props.children}
    {console.log(props.children)}
    <Footer />
  </>
);

export default Layout;
