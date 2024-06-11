import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div className="main">
        <div style={{ textAlign: "center" }}>
          <img
            src="./images/contact_us.jpg"
            style={{ width: "50%", height: "50%" }}
          />
        </div>
        <form className="form" method="post" onSubmit={handleSubmit}>
          <div className="container1">
            <h1 class="center">Contact Us</h1>
            <input
              type="text"
              name="name"
              id=""
              onChange={handleChange}
              value={data.name}
              placeholder="Enter your Name"
            />
            <input
              type="email"
              name="email"
              id=""
              onChange={handleChange}
              value={data.email}
              placeholder="Enter email"
            />
            <input
              type="phone"
              name="phone"
              id=""
              onChange={handleChange}
              value={data.phone}
              placeholder="Enter number"
            />
            <textarea
              name="message"
              id=""
              onChange={handleChange}
              value={data.message}
              cols="30"
              rows="10"
              placeholder="Type here.."
            />
            <button type="submit"> Send </button>
          </div>
        </form>
      </div>
      <div className="row-last">
        <div className="row row-cols-1 row-cols-md-3  p-3 text-white">
          <div className="col">
            <h4>CALL US</h4>
            <p> +91 798 742 3212 </p>
          </div>
          <div className="col">
            <h4>LOCATION</h4>
            <p>
              {" "}
              56rd Street and Fifth Avenue in New York City, New York, United
              States.
            </p>
          </div>
          <div className="col">
            <h4>Email</h4>
            <p> Rxshoes@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
