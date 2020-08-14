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

const check =(data ,i) => {
  if(!data[i]){
    return ''
  } else {
    return  (<div className="col-sm-12 col-md-3">
    <NewsCardSmall data={props.data[i]} />
  </div>)
 
  }
  
}


let data =[];
const prepHome =() => {
let round = 0;
  for(let i=0;i <props.data.length;i= i+3){
    if(round %2 ==0){
      data.push(
  
        <div key={i} className="row">
        
          <div className="col-sm-12 col-md-6">
            <NewsCard data={props.data[i]} />
          </div>
         {check(props.data, i+1)}
         {check(props.data, i+2)}
         
        </div>);
    } else {
      data.push(
  
        <div className="row">
          {check(props.data, i+1)}
         {check(props.data, i+2)}
          <div className="col-sm-12 col-md-6">
            <NewsCard data={props.data[i]} />
          </div>
       
         
        </div>);
    }
round++;

  }
  
  return data;
}


  return (
    <Layout
      {...props}
      title="Tech News,Business News,Review Products,Best News, News Tips, Top News ,Find News 2020 – 99News" // Update the title to update the title
      desc="99news is a place for latest news in Mobiles, Laptops, Business" // Update the desc to update the meta
      keyword="Mobiles News,Tech News,Laptop,Mobiles,Laptop News"
      subject="99news based on high quality data-driven comparison"
      author="99smartphones"
      url="https://news.99smartphones.in/"
      category2="News & Media"
      revised=""
      image="" //image for social share
      data={props}
    >
      {/* {console.log(props.data)} */}
      <div className="container">
        <div className="news-section">
      
         
           { prepHome()}
         
            {/* <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <NewsCard data={props.data[4]} />
                </div>
                <div className="col-sm-12 col-md-6">
                  <NewsCardSmall data={props.data[4]} />
                </div>
                <div className="col-sm-12 col-md-6">
                  <NewsCardSmall data={props.data[4]} />
                </div>
              </div>
            </div> */}
            {/* <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-sm-6 col-md-6">
                  <NewsCardSmall data={props.data[4]} />
                </div>
                <div className="col-sm-6 col-md-6">
                  <NewsCardSmall data={props.data[4]} />
                </div>
              </div>
            </div> */}
         
        </div>
        {/* <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.data[4]} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.data[4]} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.data[4]} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.data[4]} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.data[4]} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.data[4]} />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <NewsCardSmall data={props.data[4]} />
          </div>
        </div> */}
      </div>
      {/* <div className="container-fluid">
        <h3 className="category-header">Ads Section</h3>
      </div> */}
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

  let data = []

  for(let i =0;i <home.result.length; i++){
    if(home.result[i].data.length > 0){
      data.push(home.result[i])
     
    }
  
  }
  
  return {
    news: json,
    header: head,
    home: home,
    data,
    category: cat,
  };
};

export default Index;
