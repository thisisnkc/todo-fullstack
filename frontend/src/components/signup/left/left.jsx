import { React, useState } from "react";
import "./left.scss";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

function Left() {
  const history = useNavigate();

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setformData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { name, email, password } = formData;

    const res = await fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Opps not registerd");
    } else if (res.status === 404) {
      window.alert("Someone has already there with these details..");
    } else {
      history("/login");
    }
  }

  console.log(formData);

  return (
    <div className="leftl">
      <div className="top">
        <h1 className="heading">Welcome to THISISNKC</h1>
        <h5 className="intro">
          Already have an Account?{" "}
          <Link to="/login" className="span">
            Login
          </Link>
        </h5>
      </div>

      <div className="down">
        <form onSubmit={handleSubmit} method="POST">
          <div className="wrapper">
            <MdOutlineDriveFileRenameOutline
              className="icon"
              style={{
                padding: ".2rem",
                marginTop: "1.3rem",
                position: "absolute",
              }}
            />
            <input
              name="name"
              className="same"
              placeholder="Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            ></input>
          </div>
          <div className="wrapper">
            <HiOutlineMail
              className="icon"
              style={{
                padding: ".2rem",
                marginTop: "1.3rem",
                position: "absolute",
              }}
            />
            <input
              name="email"
              className="same"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="wrapper">
            <RiLockPasswordLine
              className="icon"
              style={{
                padding: ".2rem",
                marginTop: "1.3rem",
                position: "absolute",
              }}
            />
            <input
              name="password"
              className="same"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            ></input>
          </div>
          <input
            type="submit"
            className="btn"
            value="Create an account"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Left;
