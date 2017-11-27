import React, { Component } from 'react';
export default class UserStory extends Component {
    constructor(props){
        super(props);
        //this.setState({userStoryList:[]});
    }
    //when start of component
    componentWillMount(){
        console.log("start componentWillMount()");
        this.setState({userStoryList:this.props.userStoryList});
      }    
    render() {
        let userStoryList;
        console.log("UserStory.js/start render() in Project, this.props.userStoryList="+this.props.userStoryList);
        
        if(this.props.userStoryList){
          userStoryList = this.props.userStoryList.map(function(c,i){
            //console.log(project);
            return (
              <tr key={i}>
                  <td>{c.user}</td>
                  <td>{c.goal}</td>
                  <td>{c.why}</td>
              </tr>
            );
          });
        }
        else {
            //userStoryList=[];
            console.log("userStoryList props is empty");
        }        
        return (
            <div className="UserStory">
              {userStoryList}
            </div>
           
        );
      }
    
}          