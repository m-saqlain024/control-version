import React from "react";
import { useState } from "react";

function Form({ placeholder }) {
  const [value, setvalue] = useState("");
  const [score, setScore] = useState("0");
  const [comments, setComments] = useState("");
  function handleinput(e) {
    // this is a know as a controlled   component
    setvalue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setvalue("");
    console.log("submitted the data");
  }
  function handlecommentsSubmit(e) {
    e.preventDefault();
    console.log (comments.length)
    if ( comments.length <= 7){

        alert("bad comment and try more");
        return;
    }
    else{
        console.log('data is submited')
    }
  }



  return (
    <div>
      <h1>Try practices more </h1>
      <h1>{new Date().toLocaleString()}</h1>

      <h1>this is a a form </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          placeholder={placeholder}
          value={value}
          onChange={handleinput}
        />
        <button disabled={!value} type="submit">
          Submit
        </button>
      </form>

      <form onSubmit={handlecommentsSubmit}>
        <div>
          <h1>feedback form</h1>
          <input
            type="range"
            min={0}
            max={10}
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <label htmlFor="score"> {score}</label>
          <br />
          <label htmlFor="comments">Comments :</label>
          <br />
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>

          {console.log(comments)}
          <br />
          <button type="submit">submit feedback</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
