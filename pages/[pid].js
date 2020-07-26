// import { parseBody } from "next/dist/next-server/server/api-utils";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import BigCard from "../components/BigCard";

// posts will be populated at build time by getStaticProps()
const Category = (props) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <h1 className="container">
        <div>Category: {pid}</div>
        <div className="row">
          <div className="col-sm-2 col-md-2 col-lg-2">
            <Category />
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8">
            <BigCard />
          </div>
          <div className="col-sm-2 col-md-2 col-lg-2">
            <Category />
          </div>
        </div>
      </h1>
    </Layout>
  );
};

Category.getInitialProps = ({ query }) => {
  console.log(query.pid);
  return { data: query };
  //...
};

export default Category;
