import React, { useState } from 'react';
import './App.css';

function App() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(0);
  const [bestTime, setBestTime] = useState(1000);
  const [alphabet, setAlphabet] = useState(characters.charAt(Math.floor(Math.random() * 52)));
  const [message, setMessage] = useState("");
  const [inputText, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);

    if(counter < 20) 
    {
      const char = e.nativeEvent.data;
      if(alphabet === char)
      {
        if(counter === 19)
        { 
          setCounter(counter+1);
          if(time < bestTime){
            setBestTime(time);
            setMessage("Sucess! Reset and play again.");
          } else {
            setMessage("Failure! Reset and try again.");
          }
        } else {
          setCounter(counter+1);
          setAlphabet(characters.charAt(Math.floor(Math.random() * 52)));
        }
      } else {
        setTime(time + 0.5);
      }
    } else {
      setMessage("Reset and play!");
    }
  }

  const onClickReset = () => {
    setCounter(0);
    setTime(0);
    setMessage("");
    setText('');
    setAlphabet(characters.charAt(Math.floor(Math.random() * 52)));
  }

  return (
    <div className="App">
      <h2 className="heading">Type The Alphabet</h2>
      <p className="text"> Typing game to see how fast you type. Timer starts when you do :) </p>
      <hr className="hr-line"/>

      <p className="show-time">Time: {time} </p>
      <p className="best-time">My best time: {bestTime}s!</p>

      <div className="display-box">
        <p className={counter<20 ? "alphabet" : time<=bestTime ? "sucess" : "failure"}>
          {counter < 20 ? alphabet : message}
        </p>
      </div>
      
      <div className="type-box">
        <input 
          type="text" 
          value={inputText}
          className="input-box" 
          placeholder="Type Here"
          onChange={onChange}
        />
        <button type="button" className="btn" onClick={onClickReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
