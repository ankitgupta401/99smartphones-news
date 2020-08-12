import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Meta from "./Meta";

const handleBackdrop = () => {
  let element = document.getElementById("nav");
  element.classList.remove("Open");
};

const Layout = (props) => (
  <>
    <Meta meta={props} />
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
    <div onClick={handleBackdrop}>
      <Header {...props.header} />
    </div>
    <Navbar data={props}/>
    <div onClick={handleBackdrop}>{props.children}</div>
    <Footer />
    {/* </div> */}
  </>
);

export default Layout;
