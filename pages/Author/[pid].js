// import { parseBody } from "next/dist/next-server/server/api-utils";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import BigCard from "../../components/BigCard";
import Category from "../../components/Category";
import Link from "next/link";
import AuthorSmall from "../../components/AuthorSmall";
import * as url from "../api.json";
// posts will be populated at build time by getStaticProps()
const Pages = (props) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout data={pid}>
      <div className="container-fluid">
        <div className="shadow-section">
          <div className="container">
            <div
              className="category-section"
              style={{ display: "flex", paddingTop: "20px" }}
            >
              <Link href="/">
                <a style={{ color: "black" }} className="address-header">
                  Home
                </a>
              </Link>
              <div className="dot"></div>
              <p className="address-header">{props.writer[pid].name}</p>
            </div>
            <div className="" style={{ paddingTop: "20px" }}>
  <h1 className="category-header">Author: {props.writer[pid].name}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">

            {props.news.result.length === 0 ? <div key="1">
                <br/>
               <h3>Sorry No Results Found</h3>
               <br/>
            </div> :""}
          {props.news.result.map((val, i) => {
            return (
              <div
                key={i}
                className="col-sm-10 col-md-10 col-lg-10 "
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div className="row" style={{ width: "100%" }}>
                  <div
                    className="col-md-2 left-side"
                    style={{ marginTop: "20px" }}
                  >
                    <AuthorSmall
                      author={props.writer[props.news.result[i].writer]}
                    />
                  </div>
                  <div className="col-md-10">
                    <BigCard news={props.news.result[i]} pid={pid} />
                  </div>
                </div>

              </div>
              
            );
          })}

          <div
            className="col-sm-2 col-md-2 col-lg-2 right-side"
            style={{ marginTop: "20px",position:"absolute",right:"15px"}}
          >
            <Category category={props.category} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

Pages.getInitialProps = async ({ query }) => {
  console.log(query.pid);
  const news = await fetch(url.url + "get_news_list", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      no_of_news: 10,
      page_no: 0,
      search: "",
      data: {
        writer: query.pid,
      },
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await news.json();

  const writerapi = await fetch(url.url + "common_get_with_table_name", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      table: "writer",
      data: {
          username: query.pid
      },
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

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
  const writer = await writerapi.json();
  //  console.log(writer);
  let actualWriter = {};
  for (let i = 0; i < writer.result.length; i++) {
    actualWriter = {
      ...actualWriter,
      [writer.result[i].username]: writer.result[i],
    };
  }
  console.log(actualWriter);
  return { data: query, news: data, writer: actualWriter, category: cat };
  //...
};

export default Pages;
