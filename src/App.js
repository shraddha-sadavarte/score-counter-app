import football from "./football.png"
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [scoreA, setScoreA]=useState(0);
  const [scoreB, setScoreB]=useState(0);

  useEffect(()=>{
    const a=localStorage.getItem("scoreA");
    const b=localStorage.getItem("scoreB");

    if(a){
      setScoreA(a);
    }

    if(b){
      setScoreB(b);
    }
  },[])

  useEffect(()=>{
    if(scoreA>0){
      localStorage.setItem("scoreA", scoreA);
    }

    if(scoreB>0){
      localStorage.setItem("scoreB", scoreB);
    }
  }, [scoreA, scoreB])
  
  function resetAll(){
    setScoreA(0);
    setScoreB(0);
    localStorage.clear();
  }

  return (
    <>
    <div className='football-container'>
      <img src={football} className="img-football" alt="football img" />
      <h2 className="heading">Score Keeper</h2>

      <div className="score-card-container">
        <div className="score-card">
          <h3 className="score-card-heading">Team A</h3>
          <h5 className="score-count">{scoreA}</h5>

          <div className="score-button">
            <button className="btn" onClick={()=>{setScoreA(scoreA+1)}}>+</button>
            <button className="btn" onClick={()=>{setScoreA(scoreA-1)}}>-</button>
          </div>
        </div>

        <div className="score-card">
        <h3 className="score-card-heading">Team B</h3>
        <h5 className="score-count">{scoreB}</h5>

        <div className="score-button">
            <button className="btn" onClick={()=>setScoreB(scoreB+1)}>+</button>
            <button className="btn" onClick={()=>setScoreB(scoreB-1)}>-</button>
          </div>
        </div>
      </div>
      <div className="reset-division"><button className="btn-reset" onClick={resetAll}>Reset</button></div>
    </div>
    </>
  );
}

export default App;
