'use client';
import React from 'react';
import contactData from '../data/contactData';
import {useState,useEffect} from 'react';
import {  SendEmail } from '../api';
import InlineError from './InlineError';

import {
  validateEmail,
  validateFullName,
  validateSurName,  
  validateMessage,
} from './validation';


const Contacts = ({langue}) => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [website,setWebsite]=useState('');
  const [email, setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [fullNameError, setFullNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [surNameError, setSurNameError] = useState();
  const [messageError, setMessageError] = useState();
  const [send, setSend] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);


  useEffect(() => {
    // *********** VALIDATION **********
    validateFullName({ name, setFullNameError });
    validateSurName({ surname, setSurNameError });
    validateEmail({ email, setEmailError });
    validateMessage({ message, setMessageError });

    // ***********
    if (send) {
      setName("")
      setEmail("")
      setMessage("")
      setSurname("")
      setWebsite("")
      setSend(false)
    }
  }, [name,surname, email, message, send]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the message
    setButtonLoading(true);

    if (!fullNameError & !emailError & !surNameError & !messageError) {
      SendEmail({name,surname,website, email, message,setSend}).then(
        () => {
          setButtonLoading(false);
        },
      );  }
};
  const myData=contactData.items.filter((item) =>{
     return item.langue === langue
   }  );
  return (
 <div>
   <div id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-heading">
              <h2  dangerouslySetInnerHTML={myData ? {__html: myData[0].title}:{__html:""}}>
              </h2>
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55659.93172679448!2d120.11737591651223!3d29.319133331267178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sma!4v1696330460642!5m2!1sar!2sma"
                  width="100%"
                  height="360px"
                  frameBorder="0"
                  style={{ border: '0' }}
                  allowFullScreen=""
                ></iframe>
              </div>
              <div className="info">
                <span>
                  <i className="fa fa-phone"></i> <a href="#">+00000000000<br />+ 02245522255</a>
                </span>
                <span>
                  <i className="fa fa-envelope"></i> <a href="#">contact@Company-export.com</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <form id="contact"  onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <fieldset>
                    <input type="text" name="name" id="name" placeholder={myData && myData[0].name} onChange={(e)=>(setName(e.target.value))} value={name} autoComplete="on" required />
                  </fieldset>
                  {fullNameError && <InlineError error={fullNameError} />}
                </div>
                <div className="col-lg-12">
                  <fieldset> 
                    <input type="text" name="surname" value={surname}   id="surname" placeholder={myData && myData[0].surname} onChange={(e)=>(setSurname(e.target.value))} autoComplete="on" required />
                  </fieldset>
                  {surNameError && <InlineError error={surNameError} />}
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email} 
                      onChange={(e)=>(setEmail(e.target.value))}
                      pattern="[^ @]*@[^ @]*"
                      placeholder={myData && myData[0].email}
                      required
                    />
                  </fieldset>
                  {emailError && <InlineError error={emailError} />}
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <input type="text" 
                    value={website}
                    onChange={(e)=>(setWebsite(e.target.value))}
                    name="website" id="website" placeholder={myData && myData[0].website} required />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea 
                     class="form-control" rows="4"
                    onChange={(e)=>(setMessage(e.target.value))}
                    name="message" id="message"   value={message}>
                    </textarea>
                   </fieldset>
                   {messageError && <InlineError error={messageError} />}
                </div>
                <div className="col-lg-12" style={{padding:5}}>
                  <fieldset>
                    <button type="submit" 
                    disabled={buttonLoading && true}
                    id="form-submit" className="main-button">
                      {
                        myData &&
                        myData[0].submit
                      }
                       
                    </button>

                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-dec">
        <img src="/assets/images/contact-dec.png" alt="" />
      </div>
      <div className="contact-left-dec">
        <img src="/assets/images/contact-left-dec.png" alt="" />
      </div>
    </div>
       
  </div>
  );
};

export default Contacts;
