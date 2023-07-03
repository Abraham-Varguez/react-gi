import React, { Component } from "react";
//This is how we import the compnent from the BasicInfo file so we can use it in the return section
import BasicInfo from "./BasicInfo";
import styles from './App.module.css'

//EASY and HARD SECTION
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Abraham Varguez",
          number: "704-123-4567",
          dateOfBirth: "10-19-1997",
        },
        {
          name: "Maria Varguez",
          number: "704-123-4567",
          dateOfBirth: "08-02-1992",
        },
        {
          name: "Ana Varguez",
          number: "704-123-4567",
          dateOfBirth: "08-10-1969",
        },
        {
          name: "Gilberth Varguez",
          number: "704-123-4567",
          dateOfBirth: "01-21-1955",
        },
      ],
    };
  }

  //MEDIUM SECTION Part 2 and HARD SECTION
  render() {
    //HARD SECTION
    //This  variable will us the map method to iterate and create the HTML code that displays
    // the person information for every person that is inside the above
    //person OBJECT on the this.state
    const peopleList = this.state.people.map((person) => (
      <BasicInfo key={person.name} person={person} />
    ));

    return (
      //MEDIUM SECTION RENDER PART 3
      // <div>
      //   {/* Grabs the component from the BasicInfo File and Replaces all of the hard-coded with data from ‘this.state.person’ inside the constructor  */}
      //   <BasicInfo person={this.state.person} />
      // </div>

      //HARD SECTION RENDER
      <>
        <h1 className={styles.h1}>Contact Directory</h1>
        <div className={styles.layout}>{peopleList}</div>
      </>
    );
  }
}

export default App;
