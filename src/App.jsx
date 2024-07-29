import "./App.css";

function App() {
  const 
  function handlePrv(){
    console.log("first")
  }
    return (
        <div>
          <div className="container">
            <div className="container-progress">
                <div className="circle">1</div>
                <div className="line"></div>
                <div className="circle">2</div>
                <div className="line"></div>
                <div className="circle">3</div>
            </div>
            <div className="buttons">
                <button className="btn" onClick={handlePrv}>prv</button>
                <button className="btn">next</button>
            </div>
            </div>
        </div>
    );
}

export default App;
