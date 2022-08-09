import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Card from './components/Card';
import Details from './components/Details';

function App() {
  console.log("DETAILS: ", Details);

  let cards = Details.map((element, index, array) => {

    let text = <Card 
    key={element["id"]}
    country={element["country"]}
    location={element["location"]}
    link={element["link"]}
    dates={element["dates"]}
    description={element["description"]}
    image={element["image"]}
    />;
    
    return (text);
  });

  return (
    <div className="App">
      <Navbar/>
      {cards}
    </div>
  );
}

export default App;