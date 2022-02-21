
import './App.css';
import React from 'react';
import Axios from 'axios';
import validator from 'validator';
const useState = React.useState



function AddUserApp(props) {
  

  const [_userName, set_userName] = useState()
  const [_userHeight, set_userHeight] = useState()
  const [_userEmail, set_userEmail] = useState()
  const [emailError, setEmailError] = useState()
  const [heightError, setheightError] = useState()
  const [nameError, setnameError] = useState()

  function emailValidation(e){
    
    e.preventDefault()
    const regexemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!_userEmail || regexemail.test(_userEmail) === false){
      setEmailError('Enter valid email');
    }

    const regexNumber = /^[0-9\b]$/i;
    if(!_userHeight || regexNumber.test(_userHeight) === false){
    setheightError('Enter valid number');
    }

    if(!_userName){
      setnameError('Enter a name');
    }
    
    if(_userName && _userHeight && regexNumber.test(_userHeight) === true && _userEmail && regexemail.test(_userEmail) === true)
    {
      handleSubmit();

    }
    

    




  }

  function handleSubmit() {
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
    setEmailError("")
    setheightError("")
    setnameError("")
  }



  return (
    
<html>
    <head>
       
      </head>
    <body>
    <div className="App">
      <div className="page_wrap">
        <form onSubmit={emailValidation}>
        <br/><br/>
        <h2>Please enter your height</h2>
        <h3>For a email with your high compared to our average</h3>
        <label htmlFor="name">Name:</label><br></br>
        <input type="text" value={_userName} placeholder="John" onChange={e =>set_userName(e.target.value)}></input><br></br>
        <span style={{
          color: 'red',
        }}>{
          nameError}</span><br></br>
        <label htmlFor="height">Height (cm):</label><br></br>
        <input type="text"  value={_userHeight} placeholder="178" onChange={e =>set_userHeight(e.target.value)}></input><br/>
        <span style={{
          color: 'red',
        }}>{
          heightError}</span>
        <br></br>
        <label htmlFor="email">Email:</label><br></br>
        <input type="text" value={_userEmail} placeholder="john04@gmail.com" onChange={(e) =>set_userEmail(e.target.value)}></input><br/>
        <span style={{
          color: 'red',
        }}>{emailError}</span><br></br><br></br>

        <button variant="primary">Submit Info</button>
        <br/><br/>
        </form>
       </div>
    </div>
    
</body>
</html>
  );
}


export default AddUserApp;
