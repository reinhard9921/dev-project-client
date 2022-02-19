import React, {Component} from 'react';

import axios from 'axios';

class PostForm extends Component{

    constructor(props){
        super(props)
        this.state = {
          userName:'',
          userHeight:0,
          userEmail: ''
        }
        }

        handleChange = (e) => {

            this.setState({
                [e.target.name]: e.target.value
            })

        }

        handleSubmit = (e) => {
            console.log(e.target)
        }


    render(){
        
  const {userName, userHeight,userEmail} = this.state;
  return (

   
    <div className="App">
    
        
      <form onSubmit={this.handleSubmit}>
        <div>
      <h2>Please enter your height</h2>
      <label>
    Name:
    <input type="text" name="name" value= {userName} onChange= {this.handleChange}/>
  </label><label>
  Height (cm):
    <input type="text" name="name" value= {userHeight} onChange= {this.handleChange}/>
  </label><label>
  Email:
    <input type="text" name="name" value= {userEmail} onChange= {this.handleChange}/>
  </label>
  <input type="submit" value="Submit" />
  </div>
        </form>
   
  </div>
  ); 
    }
}

export default PostForm