import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1 className="ContactHeader">Contact Me</h1>
      <div className="Contactcontainer">
  
  <form target="_blank" action="https://formsubmit.co/29e81c2cda3b2a5fcdca37a5110374ec" method="POST">
    <div className="form-group">
      <div className="form-row">
        <div className="col">
          <input type="text" name="name" className="form-control" placeholder="Full Name" required></input>
        </div>
        <div class="col">
          <input type="email" name="email" className="form-control" placeholder="Email Address" required></input>
        </div>
      </div>
    </div>
    <div className="form-group">
      <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>
    </div>
  );
}
