import "../style.css";
import '../style.scss'

import Router from "next/router";
import firebase from '../firebase'
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer, toast } from 'react-toastify';
import * as urls from "../utils/getUrl";

import 'react-toastify/dist/ReactToastify.css';

// import navigator from 'Navigator'
// This default export is required in a new `pages/_app.js` file.



//Binding events.
const Msg = (props) => {
  return (
    <>
      <a href={props.url} target="_blank">
        <div className="d-flex justify-content-center">
        <img src={props.image}  style={{ width: "200px" }} />
        </div>
        <h5>{props.title}</h5>
        <br />
        <p> {props.description}</p>
        <br />
      </a>
    </>
  );
};


export default function MyApp({ Component, pageProps }) {
  const notify = (val) => toast(<Msg title={val.title} desc={val.body} image={val.image} url={val.click_action} />);



  React.useEffect(() => {
 
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../firebase-messaging-sw.js')
        .then(function(registration) {
          console.log('Registration successful, scope is:', registration.scope);
        }).catch(function(err) {
          console.log('Service worker registration failed, error:', err);
        });
      }
  
    const messaging = firebase.messaging()
    messaging.requestPermission().then(() => {
      return messaging.getToken()
    }).then(async (token) => {
      let tok = token;
      let id = localStorage.getItem('user_id');

      if (!id) {
        let server_id = fetch(urls.getURL() + "get_user_id_for_news" ,{ headers: {
          "Content-type": "application/json; charset=UTF-8",
        },});
        id = await (await server_id).json();

     if(id.code === 0){
      id = id.result
      localStorage.setItem('user_id', id);
     } 
      
      }

      if (localStorage.getItem('token') !== tok) {
        localStorage.setItem('token', tok);

        const token = await fetch(urls.getURL() + "update_token_of_user", {
          method: "POST",
          // Adding body or contents to send
          body: JSON.stringify({
            user_id: id,
            token: tok
          }),
          // Adding headers to the request
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await token.json();

      }
    }).catch((err) => {
      console.log(err);

    })


    messaging.onMessage((payload) => {

      notify(payload.notification)

    })



  }, [])

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
      <div>
        <ToastContainer />
        <Component {...pageProps} />
      </div>
    );
}
