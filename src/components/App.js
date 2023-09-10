import React,{useState} from "react";
import Toggle from "./Toggle";

function App() {
  function handleClick(){
    console.log('on');
  }
  return (
    <div>
      <h3>Toggle</h3>
      <Toggle />
    </div>
  );
}

export default App;
