import {useState} from 'react'
import * as urls from "../getUrl";

const url = urls.getURL();


const Footer = () => {

  const [state ,setState] = useState('')

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const addSub = (e) =>{
    e.preventDefault()
    
    var email = state;
    if (!email) {
      email = document.getElementById("email").value;
    }
  
    if (!email) {
      return;
    } else if (validateEmail(email)) {
      fetch(url.url + "/add_subscriber", {
        method: "post",
        body: JSON.stringify({ email: email, deleted: false }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => {
        res.json().then((response) => {
          if (response.code === 0) {
            Swal.fire({
              title: "Thank You For Your Subscription!",
              text: "We will inform you when we have something new",
              type: "success",
  
              confirmButtonColor: "#3085d6",
              // cancelButtonColor: '#d33',
              confirmButtonText: "Ok",
            });
          } else {
            Swal.fire("Failed", "Failed To Subscribe", "error");
          }
        });
      });
    } else {
      Swal.fire("Failed", "Invalid Email", "error");
    }
  }

  const handleChange =(e) => {

    setState(e.target.value)
  }
 return (


  <footer className="footer-section">
    <div className="container">
      <div className="footer-cta pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              {/* <i aria-hidden className="fas fa-map-marker-alt"></i> */}
              {/* <div className="cta-text">
                <h4>Find us</h4>
                <span>1010 Avenue, sw 54321, chandigarh</span>
              </div> */}
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              {/* <i aria-hidden className="fas fa-phone"></i> */}
              {/* <div className="cta-text">
                <h4>Call us</h4>
                <span>9876543210 0</span>
              </div> */}
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
              <img style={{width: "40px"}} src="/images/maild.png" alt="mail"></img>
              <div id="contact" className="cta-text">
                <h4>Mail us</h4>
                <span>99smartphones@protonmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <h1 className="footerl" style={{color:"white"}}>  <img src="/images/logo3.jpeg" style={{ width: "70px"}} ></img>  Blogs</h1>
              </div>
              <div className="footer-text">
                <p>
                Good Blogs is rare these days, and every glittering ounce of 
                it should be cherished and hoarded and worshipped and fondled like a priceless diamond.
                </p>
              </div>
              <div className="footer-social-icon">
                <span>Follow us</span>
                <a href="https://www.facebook.com/99smartphones.in">
                <img
              className="social-icon"
              src="/images/icons8-facebook-480.png"
              alt="facebook"
            />                </a>
                <a href="https://twitter.com/99Smartphones">
                <img
              className="social-icon"
              src="/images/icons8-twitter-480.png"
              alt="twitter"
            />                </a>
                <a href="https://www.instagram.com/99smartphones/?hl=en">
                <img
              className="social-icon"
              src="/images/icons8-instagram-512.png"
              alt="instagram"
            />                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                {/* <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">services</a>
                </li> */}
                {/* <li>
                  <a href="#">portfolio</a>
                </li> */}
                {/* <li>
                  <a href="#">Contact</a>
                </li> */}
                 {/* <li>
                  <a href="#">About us</a>
                </li> */}
                {/* <li>
                  <a href="#">Our Services</a>
                </li> */}
                {/* <li>
                  <a href="#">Expert Team</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li> */}
                <li>
                  <a href="#">Latest News</a>
                </li> 
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>
                  Don’t miss to subscribe to our new feeds, kindly fill the form
                  below.
                </p>
              </div>
              <div className="subscribe-form">
                <form onSubmit={addSub}>
                  <input type="text" name="email" onChange={handleChange} value={state}  placeholder="Email Address" />
                  <button style={{ padding: "7px 20px"}} type="submit">
                  <img style={{width: "40px", margin: "0px 0px"}} src="/images/send.png" alt="mail"></img>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2020, All Right Reserved{" "}
                <a href="">99smartphones</a>
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)};
export default Footer;
