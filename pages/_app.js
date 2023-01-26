import './styles.css';
import ReactGA from 'react-ga';
import { options } from 'superagent';


ReactGA.initialize('G-CM7YXRD53W', [options])

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default App;
