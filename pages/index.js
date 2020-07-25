import fetch from "node-fetch";
import Layout from "../components/Layout";
import * as url from "../pages/api.json";
import ListNews from "../components/ListNews";
import ListCard from "../components/ListCard";
import AuthorBig from "../components/AuthorBig";
import AuthorDetailed from "../components/AuthorDetailed";
import AuthorSmall from "../components/AuthorSmall";
import Category from "../components/Category";
import CardNews from "../components/CardNews";
import BigCard from "../components/BigCard"
import NewsCard from "../components/NewsCard";
import NewsCardSmall from "../components/NewsCardSmall";
const Index = (props) => (
  <Layout header={props.header}>
    <div className="container">
      <div className="news-section">
        <div className="row">
          <div className="col-6">
            <h3 className="category-header">Top Stories</h3>
            <div className="row">
              <div className="col-12">
                <NewsCard news={props.news}/>
              </div>
              <div className="col-6">
                <NewsCardSmall />
              </div>
              <div className="col-6">
                <NewsCardSmall />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <h3 className="category-header">World</h3>
                <NewsCardSmall />
              </div>
              <div className="col-6">
                <h3 className="category-header">Sponsored</h3>
                <NewsCardSmall />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h3 className="category-header">Tech & Gadgets</h3>
          <NewsCardSmall />
        </div>
        <div className="col-4">
          <h3 className="category-header">Featured News</h3>
          <NewsCardSmall />
        </div>
        <div className="col-4">
          <h3 className="category-header">United Kingdom</h3>
          <NewsCardSmall />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <h3 className="category-header">Economy</h3>
          <NewsCardSmall />
        </div>
        <div className="col-4">
          <h3 className="category-header">Banking</h3>
          <NewsCardSmall />
        </div>
        <div className="col-5">
          <h3 className="category-header">Market</h3>
          <NewsCardSmall />
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <h3 className="category-header">Ads Section</h3>
    </div>
    <div className="container">
      <div className="video-gallery">
        <h3 className="category-header">Video Gallery</h3>
      </div>
    </div>
    <div className="container">
      <h3 className="category-header">Photo Galleries</h3>
      <div className="row">
        <div className="col-3">
          <NewsCardSmall />
        </div>
        <div className="col-3">
          <NewsCardSmall />
        </div>
        <div className="col-3">
          <NewsCardSmall />
        </div>
        <div className="col-3">
          <NewsCardSmall />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="video-gallery">
        <h3 className="category-header">Video Gallery</h3>
      </div>
    </div>
    <div className="container">
      <h3 className="category-header">Last Section</h3>
      <div className="row">
        <div className="col-8">
        <NewsCard news={props.news} />
        </div>
        <div className="col-4">
          <NewsCardSmall />
        </div>
      </div>
    </div>
    <ListNews />
    <ListCard />
    <Category />
    <BigCard />
    <AuthorSmall />
    <AuthorDetailed />
    <AuthorBig />
  </Layout>
);

Index.getInitialProps = async (ctx) => {
  const news = await fetch(url.url + "get_news_list", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      "no_of_news": 10,
      "page_no": 0,
      "search": ""
  }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const header = await fetch(url.url + "common_get_with_table_name", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      table: "news_navbar",
      data: {},
    }),
    //Adding header to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let json = await news.json();
  let head = await header.json();
  return { news: json, header: head };
};

export default Index;
