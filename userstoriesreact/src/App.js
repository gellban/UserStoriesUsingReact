import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//added
import UserStory from './components/UserStory';
import 'https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
class App extends Component {
  constructor(props){
    super(props);
    console.log('start program');
    //this.userStoryList=[{user:'a',goal:'b',why:'why'},];
    this.state = {userStoryList:[{user:'a',goal:'b',why:'why'},{user:'a2',goal:'b2',why:'why2'},]}
  }
  //refrsh the data
  refresh(){
    //this.setState = {};    
  }
  //add a user story
  add(){
    console.log('add, this=');
  }
  render() {
    /*
    //this.setState = {size: 3}
    let rows = [];
    for (var i = 0; i < this.state.size; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.size; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}></td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    };  
    */
    if (!this.state.userStoryList){
      console.log('App.js/render: this.state.userStoryList is empty');
    }else{
      console.log('App.js/render: this.state.userStoryList is not empty');
    }
    //const title='Hello World!';
    //const userStoryList=[{user:'a',goal:'b',why:'why'},];
    let xr=['row data will be here',]  ;
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to User Stories Project in React and Node.js</h1>

        </header>
        <div>
          <h2>This application uses Superagent for http requests, Mongodb to store/ retrieve data, and Express for routing</h2>
          <h3>table </h3>
          <table id="simple-board">
            <thead>
              {/*As a < type of user >, I want < some goal > so that < some reason >-->*/}
              <tr>
                <th>As a [type of user] </th>         
                <th>I want [goal]</th>
                <th>So that [reason]</th>
                <th>Action</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Analyst</td>
                <td>add a user story</td>
                <td>implement add feature</td>
                <td><button onClick={this.add}>Add</button></td>
              </tr>
              <tr>
                <td>{xr}</td>
              </tr>
              <UserStory userStoryList={this.state.userStoryList} />
            </tbody>
          </table>
          <h3>end table</h3>
        </div>
      </div>
    );
  }
}

export default App;
