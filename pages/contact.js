import React from "react";
import styles from "../styles/Contact.module.css";
import { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [desc, setDesc] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/postcontact", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, email, phone, desc }),
    })
      .then((response) => response.json())
      .then((data) => {
        setName("");
        setEmail("");
        setPhone("");
        setDesc("");
        alert("Thanks for contacting us!");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us!</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.label}>
            Enter Your Name
          </label>
          <input
            className={styles.input}
            type="text"
            // className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input
            className={styles.input}
            type="email"
            // className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <div id="emailHelp" className={styles.formtext}>
            We will never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.label}>
            Phone
          </label>
          <input
            className={styles.input}
            type="phone"
            // className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc">Elaborate Your Concern</label>
          <textarea
            className={styles.input}
            // className="form-control"
            placeholder="Write Your Concern Here"
            id="desc"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
