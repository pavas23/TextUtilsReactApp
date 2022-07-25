import React from "react";
import PropTypes from "prop-types";
import { useState } from "react"; // one of the hooks in ReactJS

export default function TextForm(props) {
  function handleonChange(event) {
    console.log("text area text was changed");
    setText(event.target.value);
  }
  function handleonClickUpper() {
    let newText = text.toUpperCase();
    setText(newText);
  }
  function handleonClickLower() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function handleonClickClear() {
    setText("");
  }
  function countWords(){
      var wordArr = text.split(" ");
      var length = wordArr.length;
      for(let eachWord of wordArr){
          if(eachWord == ""){
              return length-1;
          }
      }
      return length;
  }
  const [text, setText] = useState("");
  const [mode, setMode] = useState("white");

  return (
    <>
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="mb-3 mt-5">
              <h1
                htmlFor="exampleFormControlTextarea1"
                className="form-label mb-1"
                style={props.textColor}
              >
                {props.heading}
              </h1>
              <textarea
                className="form-control mb-2"
                id="exampleFormControlTextarea1"
                rows="8"
                value={text}
                onChange={handleonChange}
                style={props.textareaColor}
              ></textarea>
              <button
                className="btn btn-primary mx-2"
                onClick={handleonClickUpper}
              >
                Convert to Uppercase
              </button>
              <button className="btn btn-primary" onClick={handleonClickLower}>
                Convert to Lowercase
              </button>
              <button
                className="btn btn-primary mx-2"
                onClick={handleonClickClear}
              >
                Clear Text
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5" style={props.textColor}>
        <div className="row">
          <div className="col-12">
            <h3>Your Text summary</h3>
            <p>
              <b>{countWords()}</b> words and <b>{text.length}</b>{" "}
              characters
            </p>
            <p>{0.008 * countWords()} minutes to read the text</p>
            <h2>Preview</h2>
            <p>
              {text.length > 0 ? text : "Write something to preview it here"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.defaultProps = {};

TextForm.propTypes = {};
