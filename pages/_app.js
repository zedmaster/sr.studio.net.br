/*!

=========================================================
* NextJS Material Kit v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import "assets/scss/nextjs-material-kit.scss?v=1.1.0";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {

 
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>SR Studio</title>

          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
              {
                "@context": "https://schema.org",
                "@type": "Studio",
                "image": [
                  "https://srstudio.com.br/snippets/1x1_photo.jpg",
                  "https://srstudio.com.br/snippets/4x3_photo.jpg",
                  "https://srstudio.com.br/snippets/16x9_photo.jpg"
                ],
                "@id": "https://srstudio.com.br",
                "name": "SR Studio",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua Paula Prevedello Gusso",
                  "addressLocality": "Curitiba",
                  "addressRegion": "PR",
                  "postalCode": "82540380",
                  "addressCountry": "BR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -25.383394029439195, 
                  "longitude": -49.259681817238956
                },
                "url": "http://srstudio.com.br",
                "telephone": "+5541998109882",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday"
                    ],
                    "opens": "09:00",
                    "closes": "22:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "22:00"
                  }
                ]
              }
              `
            }}
          />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-LZQTHP5680"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `            
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-LZQTHP5680');
                `,
            }}
          />

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-190933994-1"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `            
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'UA-190933994-1');
                `,
            }}
          />

          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="SR Studio | Studio de Design, Microblading de sobrancelhas e Piercing em Curitiba"/>
          <meta property="og:description" content="SR Studio, design e micropigmentação de sobrancelhas e body piercing em Curitiba - Barreirinha"/>
          <meta property="og:url" content="https://srstudio.com.br"/>
          <meta property="og:site_name" content="SR Studio"/>
  
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SR Studio | Studio de Design, Microblading de sobrancelhas e Piercing em Curitiba" />
          <meta name="twitter:description" content="SR Studio, design e micropigmentação de sobrancelhas e body piercing em Curitiba - Barreirinha" />
          <link rel="canonical" href="https://srstudio.com.br" /> 
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
