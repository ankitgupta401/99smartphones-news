// import { parseBody } from "next/dist/next-server/server/api-utils";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import BigCard from "../components/BigCard";
import Category from "../components/Category";
import Link from "next/link";
import AuthorSmall from "../components/AuthorSmall";
import * as urls from "../getUrl";

// posts will be populated at build time by getStaticProps()
const Pages = (props) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout
      data={props}
      title={
        props.data.pid.split("-").join(" ") +
        " : Latest News on " +
        props.data.pid.split("-").join(" ") +
        " at 99News 2020"
      }
      desc={props.data.pid.split("-").join(" ") + "update The description"} // Update the desc to update the meta
      keyword={props.data.pid.split("-").join(" ")}
      subject="99news based on high quality data-driven comparison"
      author="99smartphones"
      url={"https://news.99smartphones.in/" + props.data.pid.split("-").join(" ")}
      category="News"
      revised=""
      image="" //image for social share
    >
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
              <p className="address-header">{pid.split("-").join(" ")}</p>
            </div>
            <div className="" style={{ paddingTop: "20px" }}>
              <h1 className="category-header">
                Category: {pid.split("-").join(" ")}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">

          {props.blog.result.length === 0 ? (
            <div>
              <br />
              <h3>Sorry No Results Found</h3>
              <br />
            </div>
          ) : (
            ""
          )}

          {props.blog.result.map((val, i) => {
            return (
              <div
                key={i}
                className="col-sm-12 col-md-12 col-lg-12 col-xl-10"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div className="row" style={{ width: "100%" }}>
                  <div
                    className="col-md-0 col-lg-0 col-sm-0 col-xl-2 left-side"
                    style={{ margin: "20px auto" }}
                  >
                    <AuthorSmall
                      author={props.writer}
                    />
                  </div>
                  <div
                    className="col-md-12 col-lg-12 col-sm-12 col-xl-10"
                    style={{
                      margin: "20px auto",
                      boxShadow: "0px 0px 5px 5px rgba(227,227,227,.3)",
                    }}
                  >
                    <BigCard news={props.blog.result[i]} pid={pid} />
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className="col-sm-0 col-md-0 col-lg-0 col-xl-2 right-side"
            style={{ marginTop: "20px", position: "absolute", right: "15px" }}
          >
            <Category category={props.category} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

Pages.getInitialProps = async ({ query }) => {
  const url = urls.getURL();
  const blog = await fetch( url + "get_blog_list", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      no_of_blogs: 10,
      page_no: 0,
      search: "",
      data: {
        category: query.pid.split("-").join(" "),
      },
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await blog.json();



  const category = await fetch(url  + "common_get_with_table_name", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      table: "blogs_category_list",
      data: {},
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const cat = await category.json();


  return { data: query, blog: data, writer: data.result[0].writer, category: cat.result };
  //...
};

export default Pages;
