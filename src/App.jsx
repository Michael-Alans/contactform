import { useState } from 'react'
import reactLogo from './assets/react.svg'
import iconSuccess from "./assets/images/icon-success-check.svg"
import './App.css'

function App() {
  
  function contact(event) {

   event.preventDefault()
   const formElements = event.currentTarget
   const formData = new FormData(formElements) 
   const fname = formData.get('fname').trim();
   const lname = formData.get('lname').trim();
   const email = formData.get('email').trim();
   const queryType = formData.get('enquiry');
   const message = formData.get('message').trim()
   const consent = formData.get('consent')

  

   if(consent && queryType && email.includes('@') && fname && lname   && message ) {

    //i logging the following to the console to see if it is actually working
   console.log(consent)
   console.log(queryType)
   console.log(email)
   console.log(fname)
   console.log(lname)
   console.log(message)
   event.currentTarget.reset()
   
   const successMessage = document.querySelector('.success-message')
   
   if(successMessage) {
    successMessage.style.display = "block"
   }

   console.log(successMessage)

   } else {
    event.preventDefault()
   }
 
   if(!fname) {
    
    alert('Please provide a first name')

   }

   if(!lname) {

    alert('Please provide a last name')

   }

   if(!queryType) {

    alert('Please select a query type ')

   }

   if(!consent) {

    alert('Please consent the team to contact you')

   }

   if(!message) {

    alert('Please send us a message')

   }

  } 

  

  return (

    <>
      <div className="success-message">
        <header className='successHeader' ><img src={iconSuccess} alt="success logo" /><span style={{fontSize:"20px"}}>
        Message sent!</span ></header>
          <p style={{fontSize:"16px"}}>Thanks for completing the form, we will be in touch soon.</p>
      </div>

    <main>

      <form onSubmit={contact} name='contact-form'>

        <section><h1>Contact us</h1></section>

        <section id='names'>
          <div  className='positioning-error-message' >
          <label htmlFor="fname">Firstname *</label> <br />
          <input type="text" id='fname' name='fname'/> 
      
          </div>

          <div className='positioning-error-message'>
          <label htmlFor="lname">Lastname *</label> <br />
          <input type="text" id='lname' name='lname' />
          
          </div> 
    
        </section>

        <label htmlFor="email">Email *</label>
        <input type="email" id='email' name='email' />

        <label htmlFor="" className='query-type-label'>Query type *</label>

        <section id='query-type'>

          <button type='button' id="general">
            <label htmlFor="general-enquiry">
              <input type="radio" id='general-enquiry' name='enquiry' value='general'/>
              General Enquiry
            </label>
          </button>

          <button type='button' id="support">
            <label htmlFor="support-request">
              <input type="radio" id='support-request' name='enquiry' value='support' />
              Support Request
            </label>
          </button>

        </section>

        <div className='positioning-error-message'>
        <label htmlFor="message">Message *</label>
        <textarea name="message" id="message" cols="30" rows="5"></textarea>
        
        </div>

        <label htmlFor="consent">
          <input type="checkbox" id='consent' name='consent'/>
          I consent to being contacted by the team 
        </label>

        <button id='submit' >Submit</button>

      </form>
    </main>
    </>
  )
}

export default App

