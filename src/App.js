import React, { useState, useEffect } from 'react';
import Lipsync from './components/Lipsync/Lipsync';
import Spinner from './components/Spinner/Spinner';
import './App.css';

const App = () => {
  const [lipsync, setLipsync] = useState({});
  const [queens, setQueens] = useState([]);
  const [ids, setIds] = useState(createArrayOfNumbers(1, 171));
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);


  useEffect(() => {

    const getLipsync = async () => {
      const res = await fetch('http://www.nokeynoshade.party/api/lipsyncs/1');
      const data = await res.json();
      setLipsync(data);
      setQueens(data.queens);

    }
    getLipsync();

  }, []);

  function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
  }

  function createArrayOfNumbers(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {

      // The below lipsync ids are not found, have more than two queens or there's no clear winner
      while (i === 0 || i === 1 || i === 25 || i === 38 || i === 42 || i === 43 || i === 44 || i === 45 || i === 46 || i === 47 || i === 52 || i === 55 || i === 56 || i === 60 || i === 72 || i === 80 || i === 84 || i === 86 || i === 93 || i === 98 || i === 101 || i === 105 || i === 112 || i === 119 || i === 120 || i === 133 || i === 135 || i === 136 || i === 137 || i === 138 || i === 144 || i === 145 || i === 146 || i === 147 || i === 151 || i === 155 || i === 157 || i === 159 || i === 163) {
        i += 1;
      }
      array.push(i);
    }
    return array;
  }

  const nextLipsync = async () => {
    let randomIndex = getRandomNumber(0, ids.length - 1);
    let randomNumber = ids[randomIndex];


    let newIds = [...ids];
    newIds.splice(randomIndex, 1)
    setIds(newIds);
    const res = await fetch(`http://www.nokeynoshade.party/api/lipsyncs/${randomNumber}`);
    const data = await res.json();
    setLipsync(data);
    setQueens(data.queens);
    console.log(score);
    setShowAnswers(false);

  }
  const handleAnswer = (answer) => {
    // This prevents increasing score before next lipsync
    if (!showAnswers) {
      if (answer) {
        //Increase the score
        setScore(score + 1);
      }
    }
    setShowAnswers(true);

  }

  return queens.length > 0 ? (
    <div className="container mt-20 m-auto w-screen text-center">
      <div className="crown">
        <i className="fas fa-crown fa-5x my-5"></i>
      </div>
      {ids.length > 118 ? (
        <React.Fragment>
          <Lipsync handleAnswer={handleAnswer} showAnswers={showAnswers} lipsync={lipsync} queens={queens} nextLipsync={nextLipsync} />
        </React.Fragment>
      ) : (<div className=" flex flex-col text-2xl font-semibold w-1/12 m-auto"><h1>Score: </h1><span className="bg-white text-pink-500 p-2 rounded shadow ">{score}</span></div>)}
    </div>
  ) : <div className="flex justify-center items-center h-screen"><Spinner /></div>;
}

export default App;
