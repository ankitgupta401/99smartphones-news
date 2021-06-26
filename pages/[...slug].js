import { useRouter } from "next/router";
import {useEffect, useState} from 'react'
import Layout from "../components/Layout";
import AuthorDetailed from "../components/AuthorDetailed";
import AuthorSmall from "../components/AuthorSmall";
import * as urls from "../utils/getUrl";
import { fetchWithTimeout } from "../utils/fetchWithGreaterTimeout";

const Pages = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const [location ,setLocation] = useState();
   useEffect(() => {

     setLocation(window.location.href)
   }, [])
  return (
    <Layout
      data={props}
      title={props.blog.title}
      desc={props.blog.description} // Update the desc to update the meta
      keyword={props.blog.keywords}
      subject={props.blog.subject}
      author={props.writer?.name}
      url={
        "https://blog.99smartphones.in/" +
        props.data.slug[0] +
        "/" +
        props.data.slug[1]
      }
      abstract ={ props.blog.abstract }
      topic = {  props.blog.topic  }

      summary={  props.blog.summary  }

      classification ={props.blog.classification }

      designer={props.blog.designer || props.writer.name}


      revised={props.blog.date || props.blog.revised }
      image={props.blog.image["600x300"]} //image for social share
    >
     
      <div className="container-fluid">
        <div className="shadow-section">
          <div className="container">
            <h1
              style={{
                lineHeight: "6z0px",
                margin: "0px 40px",
                padding: "20px 0px",
              }}
            >
              {props.blog.title}
            </h1>
          </div>
        </div>
        <div className="container">
          <div
            className="row"
            style={{ marginTop: "60px" }}
          >
            <div className="col-sm-2 col-md-0 col-lg-0 col-xl-2">
              <div className="small-author">
                <AuthorSmall author={props.writer} />
               
              </div>
            </div>
            <div className="col-sm-9 col-md-12 col-lg-12 col-xl-8">
              {/* All The Content Begins Here */}
              <div>
                <img
                  className="img-fluid"
                  src={props.blog.image["600x300"]}
                  style={{ height: "auto" }}
                  alt={"image"}
                />
                {/* Printing The paragraphs */}
           
                
                    <div >
                      <br />
              
  
                      <div className="ql-snow">
                        <div
                          className="ql-editor container"
                          dangerouslySetInnerHTML={{
                            __html: props.content,
                          }}
                        />
                      </div>
                    </div>
                
                
              </div>
            </div>
            <div className="col-sm-0 col-md-0 col-lg-2">

            <div class="card" >
  <div className="card-body">
    <p>This Blog Has</p>
    <h5 class="card-title"> <i class="fa fa-eye" style={{ fontSize: "25px"}} aria-hidden="true"></i>
 &nbsp; {props.blog.views} Views</h5>
    {/* <h6 class="card-subtitle mb-2 text-muted"></h6> */}

  </div>
</div>
      <ul className="menu bottomRight">
  <li className="share top">
    <i className="fa fa-share-alt"></i>
    <ul className="submenu">

      <li><a  href={"https://www.facebook.com/sharer/sharer.php?[url]=" +location}  target="_blank"  className="facebook">   <img
                  className="social-icon"
                  src="/images/icons8-facebook-480.png"
                  alt="facebook"
                /></a></li>
      <li><a href={"https://twitter.com/intent/tweet?url=" + location}  target="_blank" className="twitter">  <img
                  className="social-icon"
                  src="/images/icons8-twitter-480.png"
                  alt="twitter"
                /></a></li>
      {/* <li><a  href={"https://twitter.com/intent/tweet?url=" + location}    target="_blank" class="googlePlus"><i class="fa fa-google-plus"></i></a></li> */}
      <li><a  href={"https://www.linkedin.com/shareArticle?mini=true&url=" + location}  target="_blank" className="facebook"><img
                  className="social-icon"
                  src="/images/icons8-linkedin-480.png"
                  alt="instagram"
                /></a></li>
 

    </ul>
  </li>
</ul>

            </div>
          </div>
            
          <div className="row" style={{ margin: "30px 0px" }}>
            <div className="col-sm-0 col-md-0 col-lg-0 col-xl-2">

            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
              <AuthorDetailed {...props.writer} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Pages.getInitialProps = async ({ query }) => {
  const url = urls.getURL();
  console.log(url , new Date().getUTCDate());
  const blog = await fetchWithTimeout(url+ "get_blog", {
    method: "POST",
 
    body: JSON.stringify({
     
        link: query.slug[1]

    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const category = await fetchWithTimeout(url  + "common_get_with_table_name", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      table: "blogs_category_list_front",
      data: {},
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const cat = await category.json();


  let data = await blog.json();


  return {
    data: query,
    blog: data.result.blog,
    content: data.result.content,
    writer: data.result.blog.writer,
    category: cat.result,
  };
  //...
};

export default Pages;
