
import { useRouter } from "next/router";
import { setState, useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';

import Layout from "../components/Layout";
import BigCard from "../components/BigCard";
import Category from "../components/Category";
import Link from "next/link";
import AuthorSmall from "../components/AuthorSmall";
import * as urls from "../getUrl";

const url = urls.getURL();

// posts will be populated at build time by getStaticProps()
const Pages = (props) => {
  const router = useRouter();
  const { pid } = router.query;
  const [blog, setBlog] = useState(props.blog.result)
  const [pageNo, setPageNo] = useState(0)


const fetchMoreData = async() => {
  setPageNo((pageNo) => {
    return pageNo +1;
  })
  let search = "";
  if(props.data.search) { search=props.data.search}
 const blog = await fetch( url + "get_blog_list", {
   method: "POST",
   // Adding body or contents to send
   body: JSON.stringify({
     no_of_blogs: 10,
     page_no: pageNo,
     search: search,
     data: search? {}: {
       category: props.data.pid.split("-").join(" "),
     },
   }),
   // Adding headers to the request
   headers: {
     "Content-type": "application/json; charset=UTF-8",
   },
 });
 const data = await blog.json();
 setBlog((prevBlog) => {
   return [...prevBlog, ...data.result];
 })
}


  return (
    <Layout
      data={props}
      title={
        props.data.pid.split("-").join(" ") +
        " : Latest Blog on " +
        props.data.pid.split("-").join(" ") +
        " at 99Blog " + new Date().getFullYear()
      }
      desc={props.data.pid.split("-").join(" ") } // Update the desc to update the meta
      keyword={props.data.pid.split("-").join(" ")}
      subject="99Blogs based on high quality data-driven comparison"
      author="99smartphones"
      url={"https://blog.99smartphones.in/" + props.data.pid.split(" ").join("-")}
      category="Blogs"
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
                Category: &nbsp;{pid.split("-").join(" ")}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">


<div className="col-md-12">

  <InfiniteScroll
  dataLength={blog.length}
  next={fetchMoreData}
  hasMore={blog.length < props.count}
  loader={ <div>
    <div className="spinner-grow text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="sr-only">Loading...</span>
</div>
  </div>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>No More Results</b>
    </p>
  }
  // // below props only if you need pull down functionality
  // refreshFunction={this.refresh}
  // pullDownToRefresh
  // pullDownToRefreshThreshold={50}
  pullDownToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  }
>
{blog.map((val, i) => {
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
                    className="col-md-2 col-lg-2 col-sm-2 col-xl-2 left-side"
                    style={{ margin: "20px auto" }}
                  >
                    <AuthorSmall
                      author={val.writer}
                    />
                  </div>
                  <div
                    className="col-md-11 col-lg-11 col-sm-11 col-xl-10"
                    style={{
                      margin: "20px auto",
                      boxShadow: "0px 0px 5px 5px rgba(227,227,227,.3)",
                    }}
                  >
                    <BigCard blog={val} pid={pid} />
                  </div>
                </div>
              </div>
            );
          })}
</InfiniteScroll>

</div>




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
 
   let search = "";
   if(query.search) { search=query.search}

  const blog = await fetch( url + "get_blog_list", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      no_of_blogs: 10,
      page_no: 0,
      search: search,
      data: search? {}: {
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
      table: "blogs_category_list_front",
      data: {},
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const cat = await category.json();

  let count=0
  if(data){
    count = data.count;
 
  }

  return { data: query, blog: data, category: cat.result  , count: count};
  //...
};

export default Pages;
