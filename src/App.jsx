import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  function contact(event) {

   event.preventDefault()
   const formElements = event.currentTarget
   const formData = new FormData(formElements) 
   const names = formData.get('name').trim();
   const email = formData.get('email').trim();
   const queryType = formData.get('enquiry');
   const message = formData.get('message').trim()
   const consent = formData.get('consent')

  

   if(names === ''  || message === '')  {
    
    
    event.preventDefault()

   }

   if(!email.includes('@')) {

    alert('include a valid email');
    event.preventDefault();
   }

   if(!queryType) {

    alert('select grom radio')
    event.preventDefault();
   }

   if(!consent) {

    alert('consent to be contacted by the team')
    event.preventDefault();
   }

   

   event.currentTarget.reset()

  }

  

  return (
    <main>
      <form onSubmit={contact} name='contact-form'>

        <section><h1>Contact us</h1></section>

        <section id='names'>
          <div  className='positioning-error-message'>
          <label htmlFor="fname">Firstname *</label> <br />
          <input type="text" id='fname' name='name'/> 
          
          </div>

          <div className='positioning-error-message'>
          <label htmlFor="lname">Lastname *</label> <br />
          <input type="text" id='lname' name='name' />
          
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
  )
}

export default App

