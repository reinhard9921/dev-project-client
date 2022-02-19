
import './App.css';
import React from 'react';
import Axios from 'axios';
const useState = React.useState

function AddUserApp(props) {
  

  const [_userName, set_userName] = useState()
  const [_userHeight, set_userHeight] = useState()
  const [_userEmail, set_userEmail] = useState()
  const [_avgHeight, set_avgHeight] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    const user = {
      name: _userName,
      height: _userHeight,
      email: _userEmail
    }
    var params = new URLSearchParams();
    params.append('name', _userName);  
    params.append('height', _userHeight);  
    params.append('email', _userEmail);  
    Axios.post('https://serverside-project-dev.herokuapp.com/api/insertuser',params 
    )

    set_userName("")
    set_userHeight("")
    set_userEmail("")
  }

  return (
    
<html>
    <head>
       
      </head>
    <body>
    <div className="App">
      <div className="page_wrap">
      <div className="content">
        <form onSubmit={handleSubmit}>
      <h2>Please enter your height</h2>
        <label htmlFor="name">Name:</label><br></br>
        <input type="text" value={_userName} placeholder="John" onChange={e =>set_userName(e.target.value)}></input><br></br><br></br>
        <label htmlFor="height">Height (cm):</label><br></br>
        <input type="text"  value={_userHeight} placeholder="178" onChange={e =>set_userHeight(e.target.value)}></input><br></br><br></br>
        <label htmlFor="email">Email:</label><br></br>
        <input type="text" value={_userEmail} placeholder="john04@gmail.com" onChange={e =>set_userEmail(e.target.value)}></input><br></br><br></br>
        <button variant="primary">Submit Info</button>
        <br/><br/>
        <label htmlFor="name">{_avgHeight}</label>
        <br/><br/>
        </form>
      </div>
       </div>
    </div>
    
</body>
</html>
  );
}


export default AddUserApp;
