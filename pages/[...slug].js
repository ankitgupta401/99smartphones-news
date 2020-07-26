import { useRouter } from "next/router";
import Layout from "../components/Layout";
//
// posts will be populated at build time by getStaticProps()
const Pages = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div className="container">
        <h1>
          Category: /{slug[0]}/{slug[1]}
        </h1>
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
