import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const Index = (props) => (
  <Layout>
    <div>
      <h1>List Page</h1>
      <div className="container news-container">
        {props.news.result.map((news, i) => (
          <div key={i} className="card">
            <img src={news.mainImage} alt={news.title} />
            <h1>{news.title}</h1>
            <p>{news.date}</p>
          </div>
        ))}
      </div>
      {/* <h1>{props.news.result[0].title}</h1> */}

      {console.log(props.news.result)}
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch(
    "https://blog.99smartphones.in/api/common/get_news_list",
    {
      method: "post",
      body: {},
    }
  );
  const data = await res.json();

  return {
    news: data,
  };
};

export default Index;
