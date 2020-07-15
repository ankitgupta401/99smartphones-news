// import { parseBody } from "next/dist/next-server/server/api-utils";
import { useRouter } from 'next/router'
// posts will be populated at build time by getStaticProps()
const  News= (props)  => {
  const router = useRouter();
  const { pid } = router.query; 

  return (
    <div>
      {/* {news.map(e,index)=>{

    }} */}
   Post: {pid}
      {/* {console.log(props)} */}
    </div>
  );
}
News.getInitialProps = ({ query }) => {
  console.log(query.slug[0])
  return {data : query}
  //...
}


export default News;