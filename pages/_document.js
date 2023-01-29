import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-51M5D3EE82"></script>
      <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />

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
