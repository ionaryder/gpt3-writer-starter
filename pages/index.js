import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import sendicon from '../assets/sendicon.png';
import { useState } from 'react';
import ReactGA from 'react-ga';
ReactGA.initialize('G-51M5D3EE82');


const Home = () => {
  //values
  const [userInput, setUserInput] = useState('');
  const [previousUserInput, setPreviousUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [answer, setAnswer] = useState('')
  const [comment, setComment] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI.....", userInput)
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setAnswer("")
  setComment("")
  setApiOutput(`${output.text}`);
  organiseOutput(`${output.text}`)
  setIsGenerating(false);
  setPreviousUserInput(userInput);
  setUserInput("");
}
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const organiseOutput = (output) => {
      console.log("organising output")

      if (output.includes("Answer:")) {
        console.log("answer")
        var organizing = output.split("Answer:")
        console.log("organizing", organizing)
        // var comment = organizing[0].split("Comment:")


        setComment(organizing[0])
        setAnswer(organizing[1])
      }
      else {
        console.log("no answer")
        setAnswer(output)
      }

      console.log("here")

      


  }

  return (
    <div className="root">
      <Head>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-CM7YXRD53W"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-CM7YXRD53W');
        </script> */}
        <title>Chat Lingual</title>
      </Head>

      <div className="section">
          <div className="header">
            <div className="header-title">
              <h1>Chat Lingual</h1>
            </div>
            <div className="header-subtitle">
              <h2>Learn French with your AI buddy</h2>
            </div>
            
            {/* <a href="#chat">
            <div className="arrow animated bounce"></div>
            </a> */}
          </div>
      </div>

      <div className="section" id="chat">

      <div className="speechbubble">
          <p><b>Bonjour! My names AIdan, and I'm your AI buddy who wants to help you learn French. Say anything, and let our lesson begin!</b></p>
          </div>


      {apiOutput && (
        
        
        <div className="messagecontainer">
          
          <div className="rightcontainer">
           <div className="speechbubbleuser">
            <div className="output-content">
                    <p>{previousUserInput}</p>
            </div>
          </div>
          <div className="comment">
          <p>{comment}</p>

          </div>
        </div>
        
          <div className="speechbubble">
                <div className="output">
                  
                  <div className="output-header-container">
                    
                  </div>
                  <div className="output-content">
                    
                    <p>{answer}</p>
                  </div>
                  </div>
            </div>
          </div>
        )}
        <div className="container">
        <div className="prompt-container">
          <textarea
            className="prompt-box"
            placeholder="Speak with AIdan!"
            value={userInput}
            onChange={onUserChangedText}
          />
          </div>
          
            <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
            
            <div className="generate">
            
            {isGenerating ? <span className="loader"></span> : <Image src={sendicon} />}
            </div>
                </a>
              </div>
            </div>

      </div>
        
      



      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >

          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace, learn with AIdan</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
