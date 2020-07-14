import fetch from "node-fetch";
import Layout from "../components/Layout";

const Index = (props) => (
  <Layout>
    <div>
      <h1>List Page</h1>
      <div className="container news-container">
        {/* {props.news.result.map((news, i) => (
          <div key={i} className="card">
            <img src={news.mainImage} alt={news.title} />
            <h1>{news.title}</h1>
            <p>{news.date}</p>
          </div>
        ))} */}
      </div>

      {console.log(props.news)}
    </div>
  </Layout>
);

const body = { search: "" };

Index.getInitialProps = async function () {
  const res = await fetch(
    "https://blog.99smartphones.in/api/commom/get_news_list",
    {
      method: "POST",
      body: { search: "" },
    }
  ).then(result => {
    console.log(result);
  })
  const data = await res;

  return {
    news: data,
  };
};

export default Index;
