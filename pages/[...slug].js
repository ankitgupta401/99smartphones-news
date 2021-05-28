import { useRouter } from "next/router";
import Layout from "../components/Layout";
import AuthorDetailed from "../components/AuthorDetailed";
import AuthorSmall from "../components/AuthorSmall";
import * as urls from "../getUrl";


const Pages = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout
      data={props}
      title={props.blog.title}
      desc={props.blog.description} // Update the desc to update the meta
      keyword={props.blog.description}
      subject="99Blogs based on high quality data-driven comparison"
      author={props.writer?.name}
      url={
        "https://blog.99smartphones.in/" +
        props.data.slug[0] +
        "/" +
        props.data.slug[1]
      }

      revised={props.blog.date}
      image={props.blog.image} //image for social share
    >

      <div className="container-fluid">
        <div className="shadow-section">
          <div className="container">
            <h1
              style={{
                lineHeight: "6z0px",
                margin: "0px 40px",
                padding: "20px 0px",
              }}
            >
              {props.blog.title}
            </h1>
          </div>
        </div>
        <div className="container">
          <div
            className="row"
            style={{ marginTop: "60px" }}
          >
            <div className="col-sm-2 col-md-0 col-lg-0 col-xl-2">
              <div className="small-author">
                <AuthorSmall author={props.writer} />
              </div>
            </div>
            <div className="col-sm-9 col-md-12 col-lg-12 col-xl-8">
              {/* All The Content Begins Here */}
              <div>
                <img
                  className="img-fluid"
                  src={props.blog.image}
                  style={{ height: "auto" }}
                  alt={"image"}
                />
                {/* Printing The paragraphs */}
           
                
                    <div >
                      <br />
              
  
                      <div className="ql-snow">
                        <div
                          className="ql-editor container"
                          dangerouslySetInnerHTML={{
                            __html: props.content,
                          }}
                        />
                      </div>
                    </div>
                
                
              </div>
            </div>
            <div className="col-sm-2 col-md-0 col-lg-2"></div>
          </div>

          <div className="row" style={{ margin: "30px 0px" }}>
            <div className="col-sm-0 col-md-0 col-lg-0 col-xl-2"></div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
              <AuthorDetailed {...props.writer} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Pages.getInitialProps = async ({ query }) => {
  const url = urls.getURL();
  console.log(url , new Date().getUTCDate());
  const blog = await fetch(url+ "get_blog", {
    method: "POST",
 
    body: JSON.stringify({
     
        link: query.slug[1]

    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const category = await fetch(url  + "common_get_with_table_name", {
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      table: "blogs_category_list",
      data: {},
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const cat = await category.json();


  let data = await blog.json();


  return {
    data: query,
    blog: data.result.blog,
    content: data.result.content,
    writer: data.result.blog.writer,
    category: cat.result,
  };
  //...
};

export default Pages;
