//import the important stuff
// import React from 'react'
// import {useState} from 'react'
import React, {useState} from 'react'
import getData from './utils/getData';

//import the components
// import People from './components/People';
import PeopleTabs from './components/PeopleTabs';
import PeopleModal from './components/PeopleModal';

//import the css
import './App.css'
import Degrees from './components/Degrees';
import Minors from './components/Minors';
import Employment from './components/Employment';
import EmploymentTable from './components/EmploymentTable';
import CoopTable from './components/CoopTable';
import Footer from './components/Footer';

const App = () => {
  //state
  //const [var, setVar] = useState(init);
  const [loaded, setLoaded] = useState(false);
  // const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();

  //go get data!
  React.useEffect(() => {
    //the page was just rendered, now get data!
    //I am going to use the getData method in utils
    getData('about/')
      .then((json) =>{
        console.log(json);
        setAboutObj(json);
        setLoaded(true);
      });
  }, []);

  //this return is for the page before we load the data
  if(!loaded) return (
    <>
      <h1>Welcome to the iSchool!</h1>
      <div>Loading...</div>
    </>
  );

  //this return is for the page after we load the data
  return (
    <>
    <div className="sticky">
    <h1>Welcome to the iSchool!</h1>
    </div>

    <div className="App">
      <nav className="navbar">
        <div className="menu">
          <ul className="menuItems">
            <li className="menuItem">
              <a href="#about">About</a>
            </li>
            <li className="menuItem">
              <a href="#degrees">Degrees</a>
            </li>
            <li className="menuItem">
              <a href="#minors">Minors</a>
            </li>
            <li className="menuItem">
              <a href="#statistics">Statistics</a>
            </li>
            <li className="menuItem">
              <a href="#employment">Employment</a>
            </li>
            <li className="menuItem">
              <a href="#people">People</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="About" id="about">
        <h2>{aboutObj.title}</h2>
        <hr/>
        <h3>{aboutObj.description}</h3>
        <div className="aboutQuote">
          <h4 className="quote">{aboutObj.quote}</h4>
          <h4>--{aboutObj.quoteAuthor}</h4>
        </div>
      </div>
      <hr/>
      {/* put my components here! */}
      <Degrees/>
      <Minors/>
      <Employment/>
      <EmploymentTable/>
      <CoopTable/>
      <PeopleTabs/>
      <PeopleModal/>
      <hr/>
      <Footer/>
    </div>
    </>
  );
}

export default App
