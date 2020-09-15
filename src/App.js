import React from 'react';
import Typist from 'react-typist';

import './App.css';
import 'react-typist/dist/Typist.css';

function App() {
  return (
    <div className="main-container">
      <Typist avgTypingDelay={20}>
        <span>Welcome to the site</span>
      </Typist>
    </div>
  );
}

export default App;
