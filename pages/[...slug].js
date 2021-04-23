import { useRouter } from "next/router";
import Layout from "../components/Layout";
import AuthorDetailed from "../components/AuthorDetailed";
import AuthorSmall from "../components/AuthorSmall";
import * as url from "../pages/api.json";
// posts will be populated at build time by getStaticProps()
const Pages = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout
      data={props}
      title={props.news.title}
      desc={props.news.description} // Update the desc to update the meta
      keyword={props.news.description}
      subject="99news based on high quality data-driven comparison"
      author={props.writer?.name}
      url={
        "https://news.99smartphones.in/" +
        props.data.slug[0] +
        "/" +
        props.data.slug[1]
      }
      category={props.category}
      revised={props.news.date}
      image={props.news.mainImage} //image for social share
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
              {props.news.title}
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
                  src={props.news.mainImage}
                  style={{ height: "auto" }}
                  alt={props.news.alt_image ? props.news.alt_image : ""}
                />
                {/* Printing The paragraphs */}
                {props.paras.map((val, i) => {
                  return (
                    <div key={i}>
                      <br />
                      {/* Subtitle for the news paragraph */}
                      <h2 style={{ color: "black" }}>
                        {" "}
                        {props.paras[i].sub_title}
                      </h2>
                      <br />
                      {/* image for the paragraph */}
                      {props.paras[i].image ? (
                        <img
                          src={props.paras[i].image}
                          style={{ height: "auto" }}
                          alt={props.paras[i].sub_title}
                        />
                      ) : (
                        ""
                      )}
                      {/* content of the paragraph */}
                      <div className="ql-snow">
                        <div
                          className="ql-editor container"
                          dangerouslySetInnerHTML={{
                            __html: props.paras[i].content,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-sm-2 col-md-0 col-lg-2"></div>
          </div>

          <div className="row" style={{ margin: "30px 0px" }}>
            <div className="col-sm-0 col-md-0 col-lg-0 col-xl-2"></div>
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
      includeParas: true
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let data = await news.json();
  let parasData = data.result[0].paras;

  

  const category = await fetch(url.url + "common_get_with_table_name", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      table: "news_category_list",
      data: {},
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const cat = await category.json();

  const writerapi = await fetch(url.url + "common_get_with_table_name", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      table: "writer",
      data: {
        username: data.result[0].writer,
      },
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const writer = await writerapi.json();
console.log(parasData)
  return {
    data: query,
    news: data.result[0],
    paras: parasData,
    writer: writer.result[0],
    category: cat,
  };
  //...
};

export default Pages;
