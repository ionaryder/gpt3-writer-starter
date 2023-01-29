import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <script dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id=G-51M5D3EE82'+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-*****');`,
  }}>
  </script>

        <link rel="shortcut icon" href="favicon.ico" />
        <meta property="og:title" content="Chat Lingual" key="title"/>
        <meta property="og:description" content="Learn French with your AI buddy" key="description"/>
        {/* <meta
          property="og:image"
          content="https://cdn.buildspace.so/courses/gpt3-writer/project-og.jpg"
        /> */}
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
