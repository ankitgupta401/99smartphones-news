import Head from "next/head";
import React from "react";

const Meta = ({ meta }) => {
  return (
    <Head>
      {/* {console.log(meta)} */}

      <title>
        {!meta.title
          ? "Tech News, Latest Technology, Mobiles, Laptops,Business 2020 – 99News"
          : meta.title}
      </title>

      <meta charset="UTF-8" />

      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <meta name="description" content={!meta.desc ? "" : meta.desc} />

      <meta
        name="keywords"
        content={
          !meta.keyword
            ? "Mobiles News,Tech News,Laptop,Mobiles,Laptop News"
            : meta.keyword
        }
      />

      <meta
        name="subject"
        content={
          !meta.subject
            ? "99news based on high quality data-driven comparison"
            : meta.subject
        }
      />
      <meta name="copyright" content="99Smartphones" />
      <meta name="language" content="ES" />
      <meta name="robots" content="index,follow" />

      <meta name="revised" content={meta.revised ? "" : ""} />
      <meta name="abstract" content="" />
      <meta name="topic" content="" />
      <meta name="summary" content="" />
      <meta name="Classification" content="" />
      <meta name="author" content="sanjay sarkar, email@hotmail.com" />
      <meta name="designer" content="" />
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

      <meta
        name="og:title"
        content={
          !meta.title
            ? "Tech News, Latest Technology, Mobiles, Laptops,Business 2020 – 99News"
            : meta.title
        }
      />
      <meta name="og:type" content="news" />
      <meta name="og:url" content={!meta.url?"https://99smartphones.com":meta.url} />

      <meta
        name="og:image"
        content={!meta.image ? "https://99smartphones.com" : meta.image}
      />

      <meta name="og:site_name" content="99News" />

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
