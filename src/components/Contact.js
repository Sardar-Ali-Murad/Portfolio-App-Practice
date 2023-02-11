import React from 'react'
import mobile from "../img/mobile.png"
import email from "../img/email.png"
import Alert from './Alert'
import "./Contact.css"
import {useAppContext} from "../context/AppContext"
const Contact = () => {
    let props=useAppContext()
    let [state,setState]=React.useState({name:"",email:"",message:""})


    function handleChange(e){
        setState((pre)=>{
            return {
                ...pre,
                [e.target.name]:e.target.value
            }
        })
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    function submit(e){
        e.preventDefault()
        if(state.name.length<1 || state.message.length<1 || state.email.length<1){
            props.AlertFun({type:"danger",msg:"Please Provide All Credentials"})
        }

        else{
           let validEmail=isValidEmail(state.email)
           if(!validEmail){
            props.AlertFun({type:"danger",msg:"Please provide The Correct Email"})
            }
            else{
                props.AlertFun({type:"success",msg:"Success! We Got You Message Hope To Contact You Soon"})
            }
        }
    }

    console.log(props)


  return (
    <div className='main-div-margins' id="contact" style={{overflow:"hidden"}} >
       <h2 className='chat'>Love A <span className='chatword'>Chat</span> With You</h2>
       <div className='contact-details main-div-margins'>
          <div className='email'>
              <img src={email}/>
              <p style={{color:'white'}}>munr437@gmail.com</p>
          </div>
          <div className='phone'>
             <img src={mobile}/>
             <p style={{color:"white"}}>+(92)318-6881689</p>
          </div>
       </div>

         <form onSubmit={submit}>
       <div className='div-center-80 contact-info'>
          <input placeholder='Your Name' name="name" className='roboto form-input'  value={state.name} onChange={handleChange}/>
          <input placeholder='Your Email' name="email" className='roboto form-input' value={state.email} onChange={handleChange}/>
          <textarea placeholder='You Message' name="message" className='roboto form-input text-area' value={state.message} onChange={handleChange} style={{height:"300px"}}></textarea>
        <div>
          {props.showAlert && <Alert/>}
        </div>
       </div>
       <div  style={{marginTop:"20px"}}>
         <button className='btn submit' onClick={submit}>Submit</button>
       </div>
         </form>
    </div>
  )
}

export default Contact
