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
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8" type="text/javascript" defer=""></script>
      <script src="/js/custom.js"></script>
     
      <script src="https://kit.fontawesome.com/a076d05399.js"></script>


      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>


      <link rel="manifest" href="/manifest.json" />

    </Head>
    <div onClick={handleBackdrop}>
      <Header {...props.header} />
    </div>
 
    <Navbar data={props.data.category} />
    <div onClick={handleBackdrop}>{props.children}</div>
    <div onClick={handleBackdrop}>
      <Footer />
    </div>
    {/* </div> */}
  </>
);

export default Layout;
