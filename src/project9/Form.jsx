import  { useState } from 'react'
import "./index1.css"

const Form = () => {
 const [userName , setUserName] = useState('')
 const [email , setEmail] = useState('')
 const [password , setPassword] = useState('')
 const [confirmPassword , setConfirmPassword] = useState('')

 const [errorUserName , setErrorUserName] = useState('')
 const [errorEmail , setErrorEmail] = useState('')
 const [errorPassword , setErrorPassword] = useState('')
 const [errorConfirmPassword , setErrorConfirmPassword] = useState('')

 const [userColor , setUserColor] = useState("");
 const [emailColor , setEmailColor] = useState("");
 const [passwordColor , setPasswordColor] = useState("");
 const [confirmPasswordColor , setConfirmPasswordColor] = useState("");

 
 function validate(e) {
    e.preventDefault();

    if (userName.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be 8 letters long.");
      setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should have @gmail");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long ");
      setPasswordColor("red");
    }

    if (password != "" && password == confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords didn't matched.");
      setConfirmPasswordColor("red");
    }
  }
 

  return (
    <>
     <div className="heading1">Form Validation</div>
      <div className="card1">
         <div className="card-image"></div>
         <form className='form'>
            <input type="text" placeholder='name' style={{borderColor : userColor}} value={userName} onChange={(e)=> setUserName(e.target.value)}/>
            <p className="error">{errorUserName}</p>

            <input type="text" placeholder='Email' style={{borderColor : emailColor}} value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="error">{errorEmail}</p>

            <input type="text" placeholder='Password' style={{borderColor : passwordColor}} value={password} onChange={(e) => setPassword(e.target.value)} />
            <p className="error">{errorPassword}</p>

            <input type="text" placeholder='ConfirmPassword' style={{borderColor : confirmPasswordColor}} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <p className="error">{errorConfirmPassword}</p>

           
            <button  className="submit-btn1" onChange={validate}>Submit</button>
         </form>
      </div>
    </>
  )
}

export default Form
