import React from 'react'
import { render } from "react-dom";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";


export default function App() {
  function onChange(newValue) {
    console.log("change", newValue);
  }

  return (
    <div style={{background:'lightblue',width:'100%'}}>
      <div style={{width:'500px'}}>
      <AceEditor
  placeholder="Placeholder Text"
  mode="javascript"
  theme="terminal"
  name="blah2"
  // onLoad={this.onLoad}
  onChange={onChange}
  fontSize={16}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
//   value={`function onLoad(editor) {
//   console.log("i've loaded");
// }`}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 2,
  }}/> 
      </div>
 
    </div>
  )
}

