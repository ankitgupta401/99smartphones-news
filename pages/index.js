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
            <p>{new Date(news.date).toLocaleDateString()}</p>
          </div>
        ))} */}
      </div>

      {console.log(props.news)}
    </div>
  </Layout>
);


Index.getInitialProps = async (ctx) => {
  const res = await fetch('https://blog.99smartphones.in/api/common/get_news_list',
    {
      method: "POST",
      // Adding body or contents to send 
      body: JSON.stringify({
        search: ""
      }),
   // Adding headers to the request 
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  let json = await res.json()

  return { news: json }

}

export default Index;
