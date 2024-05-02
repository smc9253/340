import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Welcome from './Components/Welcome';
import Welcome2 from './Components/Welcome2';
import './App.css';


function App() {
  //build in state!
  // const [count, setCount] = useState(init);
  // const [test, setTest] = useState(5);
  const [loaded, setLoaded] = useState(false);
  const[dataObj, setDataObj] = useState();

  //my methods

  const getData = () => {
    // load data into dataObj, flip the bit on loaded
    setDataObj({
      title:"React is FUN!", 
      description:"lots and lots of words, something meaningful..."
    });
    setLoaded(true);
  }

  console.log('in the app');

  if(!loaded){
    return (
      <>
        <Welcome name="Shyanne" age="19"/>
        <Welcome name="Priscilla" age="20"/>
        Loading...
        <button onClick={getData}>Get Data</button>
      </>
    )
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {console.log("inside of the JSC")}
      <h1>Data!</h1>
      <h3>{dataObj.title}</h3>
      <h5>{dataObj.description}</h5>
      <Welcome2 name="Shyanne" job="learn" myStyle="meStyle"/>
      <Welcome2 name="Priscilla" job="learn" myStyle="otherStyle"/>
    </>
  )
}

export default App
