import { useRouter } from "next/router";

// posts will be populated at build time by getStaticProps()
const News = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <h3>Author:{pid}</h3>
    </div>
  );
};

News.getInitialProps = ({ query }) => {
  console.log(query.pid);
  return { data: query };
  //...
};

export default News;
