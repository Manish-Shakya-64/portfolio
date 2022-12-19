import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";

import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

const contactFormHandler = (e)=> {

    e.preventDefault();
}

  return (
    <div className="contact">
      <div className="contactRightBar">

      </div>
      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
        <Typography variant="h4">Contact Us</Typography>
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
