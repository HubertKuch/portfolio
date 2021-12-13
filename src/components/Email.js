import React from 'react';

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
