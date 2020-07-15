import fetch from "node-fetch";
import Layout from "../components/Layout";
import * as url from '../pages/api.json';
const Index = (props) => (
  <Layout  header={props.header}>
    <div>
      <h1>List Page</h1>
      <div className="container news-container">
        {props.news.result.map((news, i) => (
          <div key={i} className="card">
            <img src={news.mainImage} alt={news.title} />
            <h1>{news.title}</h1>
            <p>{new Date(news.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      {console.log(props.news)}
    </div>
  </Layout>
);

Index.getInitialProps = async (ctx) => {
  const res = await fetch(
    url.url + "get_news_list",
    {
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        search: "",
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  const header =  await fetch(
    url.url+  "common_get_with_table_name",
    {
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
    }
  );
  let json = await res.json();
let head = await header.json();
  return { news: json  , header:head};
};

export default Index;
