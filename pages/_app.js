import './styles.css';
import ReactGA from 'react-ga';
import { options } from 'superagent';
import Script from 'next/script';


ReactGA.initialize('G-51M5D3EE82', [options])

function App({ Component, pageProps }) {

  return (
    <>
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

      <Component {...pageProps} />
    </>
  );
  // return <Component {...pageProps} /> 

  
}
export default App;
