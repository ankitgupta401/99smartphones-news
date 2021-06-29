import Head from "next/head";
import React from "react";

const Meta = ({ meta }) => {
  return (
    <Head>
   

      <title>
        {!meta.title
          ? "Tech Blog, Latest Technology, Mobiles, Laptops,Business 2020 – 99Blogs"
          : meta.title}
      </title>

      <meta charSet="UTF-8" />

      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <meta
        name="description"
        content={
          !meta.desc
            ? "Tech Blogs, the latest technology blog of the day, reviews of the new best tech gadgets include mobile, tablets, laptops, video games. As a tech blog site, we cover online tech blogs online in India and around the world with technology related updates from new and upcoming mobiles, cameras, laptops, video games like Google, Apple, Samsung and others."
            : meta.desc
        }
      />

      <meta
        name="keywords"
        content={
          !meta.keyword
            ? "Mobiles Blogs,Tech Blogs,Laptop,Mobiles,Laptop Blogs"
            : meta.keyword
        }
      />

      <meta
        name="subject"
        content={
          !meta.subject
            ? "99Blogs based on high quality data-driven comparison"
            : meta.subject
        }
      />
      <meta name="copyright" content="99Smartphones" />
      <meta name="language" content="ES" />
      <meta name="robots" content="index,follow" />

      <meta name="revised" content={meta.revised ? meta.revised : ""} />
      <meta name="abstract" content={meta.abstract ? meta.abstract : ""} />
      <meta name="topic" content={meta.topic ? meta.topic : ""} />
      <meta name="summary" content={meta.summary ? meta.summary : ""} />
      <meta name="Classification"  content={meta.classification ? meta.classification : ""}  />
      <meta name="author"  content={meta.author ? meta.author : "99smartphones.in"}  />
      <meta name="designer" content={meta.designer ? meta.designer : "99smartphones.in"}  />
      <meta name="reply-to" content={meta.designer ? meta.designer : "99smartphones.in"}/>
      <meta name="owner" content={meta.owner ? meta.owner : "99smartphones.in"}/>
      <meta
        name="url"
        content={!meta.url ? "https://blog.99smartphones.in" : meta.url}
      />
      <meta name="identifier-URL" content="https://blog.99smartphones.in" />
      <meta name="directory" content="submission" />
      <meta
        name="category"
        content={!meta.category2 ? "Blog" : meta.category2}
      />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Expires" content="0" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Cache-Control" content="no-cache" />

      <link rel="canonical" href={!meta.url ? "https://blog.99smartphones.in" : meta.url} />
      <meta
        name="og:title"
        content={
          !meta.title
            ? "Tech Blogs, Latest Technology, Mobiles, Laptops,Business 2020 – 99Blogs"
            : meta.title
        }
      />
      <meta name="og:type" content="blogs" />
      <meta
        name="og:url"
        content={!meta.url ? "https://blog.99smartphones.in" : meta.url}
      />

      <meta
        name="og:image:secure"
        content={!meta.image ? "https://blog.99smartphones.in" : meta.image}
      />

<meta
        name="image"
        content={!meta.image ? "https://blog.99smartphones.in" : meta.image}
      />

      <meta name="og:site_name" content="99Blogs" />

      <meta name="og:description" content={!meta.desc ? "" : meta.desc} />

      {/* <meta name="fb:page_id" content="43929265776" />
      <meta name="og:email" content="me@example.com" />
      <meta name="og:phone_number" content="650-123-4567" />
      <meta name="og:fax_number" content="+1-415-123-4567" />
      <meta name="og:latitude" content="37.416343" />
      <meta name="og:longitude" content="-122.153013" />
      <meta name="og:street-address" content="1601 S California Ave" />
      <meta name="og:locality" content="Palo Alto" />
      <meta name="og:region" content="CA" />
      <meta name="og:postal-code" content="94304" />
      <meta name="og:country-name" content="USA" />

      <meta property="og:type" content="game.achievement" />
      <meta property="og:points" content="POINTS_FOR_ACHIEVEMENT" />

      <meta property="og:video" content="http://example.com/awesome.swf" />
      <meta property="og:video:height" content="640" />
      <meta property="og:video:width" content="385" />
      <meta property="og:video:type" content="application/x-shockwave-flash" />
      <meta property="og:video" content="http://example.com/html5.mp4" />
      <meta property="og:video:type" content="video/mp4" />
      <meta property="og:video" content="http://example.com/fallback.vid" />
      <meta property="og:video:type" content="text/html" />

      <meta property="og:audio" content="http://example.com/amazing.mp3" />
      <meta property="og:audio:title" content="Amazing Song" />
      <meta property="og:audio:artist" content="Amazing Band" />
      <meta property="og:audio:album" content="Amazing Album" />
      <meta property="og:audio:type" content="application/mp3" /> */}
    </Head>
  );
};
export default Meta;
