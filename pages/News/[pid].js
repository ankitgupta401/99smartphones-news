// import { parseBody } from "next/dist/next-server/server/api-utils";
import { useRouter } from "next/router";
import Category from "../../components/Category";
import RecentPosts from "../../components/RecentPosts";

// posts will be populated at build time by getStaticProps()
const News = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      {/* Post: {pid} */}
      <Category />
      <RecentPosts/>
    </div>
  );
};

News.getInitialProps = ({ query }) => {
  console.log(query.pid);
  return { data: query };
  //...
};

export default News;
