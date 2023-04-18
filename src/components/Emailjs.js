import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Emailjs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y0ucybf', 'template_dmbaapg', form.current, 'XffeLLRnD1wHmqDUE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <center>
    <form ref={form} onSubmit={sendEmail}>
      <label>subject:</label><br/>
      <input type="text" name="subject" placeholder='subject'/><br/>
      <label>Email:</label><br/>
      <input type="email" name="email" placeholder='email'/><br/>
      <label>Message:</label><br/>
      <textarea name="message" placeholder='message'/><br/>
      <input type="submit" value="Send" />
    </form>
    </center>
  );
};
export default Emailjs