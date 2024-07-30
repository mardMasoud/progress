import { useState } from "react";
import "./App.css";

function App() {
const [progress,setProgress]=useState(0);
  function handlePrv(){
    if(progress>0)
    setProgress(progress-1)
  } function handleNext(){
    if(progress<4)
    setProgress(progress+1)
  }
    return (
        <div>
          <div className="container">
            <div className="container-progress">
                <div className= {progress>=0? 'circle fill': 'cricle'}>1</div>
                <div className={progress>=1?"line fill2":'line'}></div>
                <div className={progress>=2? 'circle fill': 'circle'}>2</div>
                <div className={progress>=3?"line fill2":'line'}></div>
                <div className={progress>=4? 'circle fill': 'circle'}>3</div>
            </div>
            <div className="buttons">
                <button className="btn" onClick={handlePrv}>prv</button>
                <button className="btn" onClick={handleNext}>next</button>
            </div>
            </div>
        </div>
    );
}

export default App;
