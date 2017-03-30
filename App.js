import React, { Component } from 'react';
import logo from './miniicon.svg';
import './App.css';
import uuid from 'uuid';
import AddProject from './components/AddProject';
import Projects from './components/Projects';

class App extends Component {
  constructor(){
    super();
    this.state={ projects: []
    }
  }
componentWillMount(){
  this.setState({projects: [

  {
    id:uuid.v4(),
    title: "4X4",
     category: "SUV"
   },
   {
     id:uuid.v4(),
     title: "Compact Family",
     category: "Sedan"
   },
   {
    id:uuid.v4(),
     title: "Turbo Charged",
     category: "Sports Cars"
   },
   {
     id:uuid.v4(),
     title: "Flagship Cars",
     category: "Luxury Cars"
   },
   {
     id:uuid.v4(),
     title: "High Performance",
     category: "Super Cars"
  }
]});
}
handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
}
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Car Classification Project</h2>
          </div>
        <p className="App-intro">
          Get started by Adding and Classifying Vehicles.
        </p>
        <Projects/>
        <p className="App-form">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        </p>
      </div>
    );
  }
}

export default App;
