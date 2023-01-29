import './styles.css';
import ReactGA from 'react-ga';
import { options } from 'superagent';


ReactGA.initialize('G-51M5D3EE82', [options])

function App({ Component, pageProps }) {
  return <Component {...pageProps} /> 

  
}
export default App;
