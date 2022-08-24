import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Converter from "./components/Converter";
import ChangeSource from "./components/ChangeSource";

function App() {

    let [sourceType, setSourceType] = useState("moxfield")

    return (
      <>
        <Header/>
          <ChangeSource sourceState={setSourceType}/>
        <Converter type={sourceType}/>
      </>
    );
}

export default App;
