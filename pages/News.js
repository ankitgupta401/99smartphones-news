import { parseBody } from "next/dist/next-server/server/api-utils";

// posts will be populated at build time by getStaticProps()
export default function News({ news }) {
  return (
    <div>
      {/* {news.map(e,index)=>{

    }} */}
      News
    </div>
  );
}

// News.getStaticProps = async () => {
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   // const news = response.json();
//   // console.log(news);
//   // return { news: news };
// };
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const posts = await res.json();
  console.log(posts);
}
