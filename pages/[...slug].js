import { useRouter } from "next/router";
import Layout from "../components/Layout";
import AuthorDetailed from "../components/AuthorDetailed";
//
// posts will be populated at build time by getStaticProps()
const Pages = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div className="container-fluid">
        <div className="shadow-section">
          <div className="container">
            <h1 style={{ lineHeight: "150px", margin: "0px 40px" }}>
              {/* {slug[1]} */}
              Header Of the Title
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2"></div>
            <div className="col-sm-8 col-md-8 col-lg-8"></div>
            <div className="col-sm-2 col-md-2 col-lg-2"></div>
          </div>
          <div className="row">
            <div className="col-sm-10 col-md-10 col-lg-10">
              <AuthorDetailed />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Pages.getInitialProps = ({ query }) => {
  console.log(query.slug);
  return { data: query };
  //...
};

export default Pages;
