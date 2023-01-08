import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';


const Home = () => {

  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
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

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>

      <div className="section">
          <div className="header">
            <div className="header-title">
              <h1>Chat Lingual</h1>
            </div>
            <div className="header-subtitle">
              <h2>Learn French with your AI buddy</h2>
            </div>
            <a href="#intro">
            <div className="button">
              Let's get started
            </div>
            </a>
          </div>
      </div>

      <div className="section" id="intro">
            <div className="introduction">
              <h2>Meet AIdan, your AI buddy
                <br /><br />

              AIdan wants to help you learn French through conversation. If you start chatting to AIdan in French (or even English if you’re really struggling) AIdan will respond with feedback on what you said, and an answer to you conversation.
              <br /><br />
              You don’t need to get creative AIdan will always keep the conversation going, no need to double text.</h2>
            </div>
      </div>


      <div className="section">
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
            {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
                </a>
              </div>
              {apiOutput && (
              <div className="output">
                <div className="output-header-container">
                  <div className="output-header">
                    <h3>AIdan says:</h3>
                  </div>
                </div>
                <div className="output-content">
                  <p>{apiOutput}</p>
                </div>
              </div>
            )}
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
