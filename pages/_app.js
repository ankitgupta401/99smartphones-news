import "../style.css";
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/core";


// This default export is required in a new `pages/_app.js` file.

//Binding events. 




export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] =React.useState(false);



Router.events.on('routeChangeStart', () => loadOn());
 Router.events.on('routeChangeComplete', () => {
  console.log('here')
    loadOff()

 }); 
 Router.events.on('routeChangeError', () => {
   
    loadOff()

 });
 
  const loadOn =() => {
    setLoading(prevLoading => {
      return true
    })
  }
  const loadOff =() => {
    setLoading(prevLoading => {
      return false
    })
  }


  return (loading ? <div style ={{ display: "flex", justifyContent: "center", alignItems: "center", height:"550px"}}><HashLoader    size={150}  color={"#F9B304"} loading={loading}  ></HashLoader></div>: <Component {...pageProps} />);
}
