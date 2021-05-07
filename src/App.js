import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

// For now we can create our own data as an array of objects
// Later this data might come from an API!
const details = [
  {
    name: "Jane Doe",
    url: "https://profiles.com/jane-doe",
    age: 33
  },
  {
    name: "Seth",
    url: "https://profiles.com/seth",
    age: 21
  },
  {
    name: "Tabitha",
    url: "https://profiles.com/tabitha-rocks",
    age: 25
  }
];

function App(props) {
  return (
    <main>
      <Navbar />
      <nav>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </nav>

      <div className="Cards">
        {/* 
				You can manually add a component pass
				it one of the objects from the array
				<Card details={details[0]} />
				<Card details={details[1]} />
				<Card details={details[2]} /> 
				*/}
        {details.map((person) => {
          // Just testing things out:
          // return <h1 key={person.url}>{person.name}</h1>

          // When map runs it calls the callback once for
          // each element in the array and passes it the
          // element (in this case an object we called 'person')
          // So we can just pass that person object to the the
          // details property since that's what it was expecting
          return <Card key={person.url} details={person} />;
        })}
      </div>
    </main>
  );
}

export default App;
