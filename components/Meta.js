import Head from "next/head";
import React from "react";

const Meta = ({ meta }) => {
  return (
    <Head>
      {console.log(meta)}
      {/* <title>
        {meta.data.code !== 0 
          ? meta.data.news.title
          : "99Smartphones News"}
      </title> */}
      <title>99smartphones</title>
      <meta charset="UTF-8" />
      {/* <link rel="shortcut icon" href="/images/favicon.ico" /> */}

      {/* <!-- All Basic MetaTags Starts Here  */}
      <meta name="keywords" content="mobiles,games,free,2020" />
      <meta
        name="description"
        content={!meta.desc ?"Here is the top 9 free games for mobile which you can download in 2020": meta.desc }
      />
      <meta
        name="subject"
        content="99Smartphones based on high quality data-driven comparison"
      />
      <meta name="copyright" content="99Smartphones" />
      <meta name="language" content="ES" />
      <meta name="robots" content="index,follow" />
      <meta name="revised" content="Sunday, July 18th, 2010, 5:15 pm" />
      <meta name="abstract" content="" />
      <meta name="topic" content="" />
      <meta name="summary" content="" />
      <meta name="Classification" content="" />
      <meta name="author" content="sanjay sarkar, email@hotmail.com" />
      <meta name="designer" content="" />
      <meta name="copyright" content="" />
      <meta name="reply-to" content="email@hotmail.com" />
      <meta name="owner" content="" />
      <meta name="url" content="https://99smartphones.com" />
      <meta name="identifier-URL" content="http://www.websiteaddress.com" />
      <meta name="directory" content="submission" />
      <meta name="category" content="" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <meta http-equiv="Expires" content="0" />
      <meta http-equiv="Pragma" content="no-cache" />
      <meta http-equiv="Cache-Control" content="no-cache" />
      {/* All Basic Meta Tags Ends Here --> */}

      {/* OpenGraph Meta Tags Start Here --> */}

      <meta
        name="og:title"
        content="Here is the top 9 free games for mobile which you can download in 2020"
      />
      <meta name="og:type" content="blog" />
      <meta name="og:url" content="https://99smartphones.com" />
      <meta name="og:image" content="/images/2.jpg" />
      <meta name="og:site_name" content="IMDb" />
      <meta
        name="og:description"
        content="A group of U.S. Marines, under command of..."
      />
      <meta name="fb:page_id" content="43929265776" />
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
      <meta property="og:audio:type" content="application/mp3" />
    </Head>
  );
};
export default Meta;
