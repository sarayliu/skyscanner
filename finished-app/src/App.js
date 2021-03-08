import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AirportInfo from './components/AirportInfo';

function App() {
  return (
    <div className="App">
      <Header title="Airport Info"></Header>
      <AirportInfo></AirportInfo>
      {/*<Footer title="2021 Capital One Software Engineering Summit Challenge + \n + Data Pulled from Skyscanner API + \n + Sara Liu">*/}
      {/*<Footer title="2021 Capital One Software Engineering Summit Challenge <br /> Data Pulled from Skyscanner API <br /> Sara Liu">*/}
      {/*<Footer title=["2021 Capital One Software Engineering Summit Challenge", <br />, "Data Pulled from Skyscanner API", <br />, "Sara Liu"]>*/}
      {/*<Footer title="2021 Capital One Software Engineering Summit Challenge\nData Pulled from Skyscanner API\nSara Liu">*/}
      <Footer title="2021 Capital One Software Engineering Summit Challenge" title2="Data Pulled from Skyscanner API" title3="Sara Liu">
      	{/*<div>
      	 	<h2>Data Pulled from Skyscanner API</h2>
      	 	<h2>Sara Liu</h2>
      	 </div>*/}
      </Footer>
    </div>
  );
}

export default App;