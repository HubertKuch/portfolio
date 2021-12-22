import React from 'react';
import { createTransport } from 'nodemailer';

const emailTransporter = createTransport({
  service: 'gmail',
  auth: {
    user: 'contanthubertkuch@gmail.com',
    pass: 'Megahaslo123'
  }
});

const mail = {
  from: 'contanthubertkuch@gmail.com',
  to: 'kuchhubert@gmail.com',
  subject: 'test email',
  text: 'test'
}

emailTransporter.sendMail(mail, (err, data)=>{
  console.log(err, data)
});

export default function Email() {
  return (
    <div className="send-email-section fade">
      <header>
        <span className="section-header">
          or send me
          <span className="pink-color"> e-mail</span>.
        </span>
      </header>
      <div className="form">
        <form>
          <label>
            <div>Name:</div>
            <input type="text" name="name" />
          </label>

          <label>
            <div>Your e-mail:</div>
            <input type="email" name="email" />
          </label>

          <label>
            <div>Subject:</div>
            <input type="text" name="subject" />
          </label>

          <label>
            <div>Description:</div>
            <textarea type="text" name="description"></textarea>
          </label>
          <div>
            <button>Send me e-mail.</button>
          </div>
        </form>
      </div>
    </div>
  );
}
