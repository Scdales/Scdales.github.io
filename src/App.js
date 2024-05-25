import React, { useState } from 'react';
import Typist from 'react-typist';

import './App.css';
import 'react-typist/dist/Typist.css';

function App() {
  const [firstLineFinished, setFirstLineFinished] = useState(false);

    const renderRest = () => {
      setTimeout(() => {
        setFirstLineFinished(true);
      }, 1000);
    }

  return (
    <div className="main-container">
      <Typist avgTypingDelay={50} onTypingDone={() => renderRest()} cursor={{ hideWhenDone: true}}>
        <span>Welcome.</span>
      </Typist>
      {/*{firstLineFinished ? (*/}
      {/*  <div>*/}
      {/*    <Typist cursor={{ show: false}}><span>Something else.</span></Typist>*/}
      {/*    <Typist cursor={{ show: false}}><span>Something else again.</span></Typist>*/}
      {/*  </div>*/}
      {/*) : null}*/}

    </div>
  );
}

export default App;
