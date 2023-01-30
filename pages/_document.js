import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1988230987229193"
     crossorigin="anonymous"></script>
        <link rel="shortcut icon" href="favicon.ico" />
        <meta property="og:title" content="Chat Lingual" key="title"/>
        <meta property="og:description" content="Learn French with your AI buddy" key="description"/>
        {/* <meta
          property="og:image"
          content="https://cdn.buildspace.so/courses/gpt3-writer/project-og.jpg"
        /> */}
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-51M5D3EE82"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-51M5D3EE82');
        `}
      </Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
