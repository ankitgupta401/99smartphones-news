import { useRouter } from "next/router";
import Layout from "../components/Layout";
import AuthorDetailed from "../components/AuthorDetailed";
import * as url from "../pages/api.json";
// posts will be populated at build time by getStaticProps()
const Pages = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div className="container-fluid">
        <div className="shadow-section">
          <div className="container">
            <h1 style={{ lineHeight: "150px", margin: "0px 40px" }}>
              {/* {slug[1]} */}
           {console.log(props)}
           {props.news.title}
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-sm-8 col-md-8 col-lg-8"></div>
            <div className="col-sm-2 col-md-2 col-lg-2"></div>
          </div>
          {/* All The Content Begins Here */}
<div>
<img src={props.news.mainImage} style={{height:"400px"}} alt={props.news.alt_image ?props.news.alt_image:''  } />
{/* Printing The paragraphs */}
{props.paras.map((val, i) => {
     return (
       <div key={i}> 
  <br/>
        {/* Subtitle for the news paragraph */}
       <h2 style={{color:"black"}}> {props.paras[i].sub_title}</h2>
       <br/>
       {/* image for the paragraph */}
        {props.paras[i].image ?   <img src={props.paras[i].image} style={{height:"400px"}} alt={props.paras[i].sub_title} />:''}
          {/* content of the paragraph */}
          <div dangerouslySetInnerHTML={{ __html: props.paras[i].paras }} />
        
       </div>
     )
}) }

</div>

          <div className="row">
            <div className="col-sm-10 col-md-10 col-lg-10">
              <AuthorDetailed {...props.writer}  />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Pages.getInitialProps = async ({ query }) => {
  const news = await fetch(url.url + "get_news_list", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      no_of_news: 1,
      page_no: 0,
      search: "",
      data: {
        link: query.slug[1],
      },
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let data = await news.json();
let parasData = [];
// console.log(data,  query.slug[1]);
  for(let i=0;i< data.result[0].paras.length;i++){
    const paras = await fetch(url.url + "get_paras", {
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
       "filename": data.result[0].paras[i].content
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
   
  let dataParas = await paras.json();
 
  parasData.push({sub_title:data.result[0].paras[i].sub_title,  image : data.result[0].paras[i].image, paras: dataParas.result});
  }
 
  const writerapi = await fetch(url.url + "common_get_with_table_name", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      table: "writer",
      data: {
        email: data.result[0].writer
      },
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const writer = await writerapi.json();

  return { data: query , news: data.result[0], paras: parasData, writer: writer.result[0]};
  //...
};

export default Pages;
