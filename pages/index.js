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
import BigCard from "../components/BigCard";
import NewsCard from "../components/NewsCard";
import NewsCardSmall from "../components/NewsCardSmall";



const Index = (props) => {
  return (
    <Layout {...props} data={props}>
      <div className="container">
        <div className="news-section">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <NewsCard data={props.gadgetsCategory} />
                </div>
                <div className="col-sm-12 col-md-6">
                  <NewsCardSmall data={props.technologyCategory} />
                </div>
                <div className="col-sm-12 col-md-6">
                  <NewsCardSmall data={props.businessCategory} />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  <NewsCardSmall data={props.businessCategory} />
                </div>
                <div className="col-sm-6 col-md-6">
                  <NewsCardSmall data={props.gamesCategory} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.laptopsCategory} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.mobilesCategory} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.entertainmentCategory} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.worldCategory} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.indiaCategory} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.worldCategory} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.indiaCategory} />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h3 className="category-header">Ads Section</h3>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async (ctx) => {
  const news = await fetch(url.url + "get_news_list", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      no_of_news: 10,
      page_no: 0,
      search: "",
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

  const homeData = await fetch(url.url + "get_news_for_home_page", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      data: {},
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let home = await homeData.json();
  let json = await news.json();
  let head = await header.json();
  let games = home.result[0];
  let business = home.result[1];
  let gadgets = home.result[2];
  let laptops = home.result[3];
  let mobiles = home.result[4];
  let technology = home.result[5];
  let entertainment = home.result[6];
  let world = home.result[7];
  let india = home.result[8];

  return {
    news: json,
    header: head,
    home: home,
    gadgetsCategory: gadgets,
    technologyCategory: technology,
    businessCategory: business,
    gamesCategory: games,
    laptopsCategory: laptops,
    mobilesCategory: mobiles,
    entertainmentCategory: entertainment,
    worldCategory: world,
    indiaCategory: india,
  };
};

export default Index;
