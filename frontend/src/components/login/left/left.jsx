import React, { useState } from "react";
import "./left.scss";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link , useNavigate} from "react-router-dom";

function Left() {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const history = useNavigate();

  function handleChange(event){
    setformData({...formData , 
    [event.target.name] : event.target.value})
  }

  async function handleSubmit(event){
    event.preventDefault();
    const {email , password} = formData
     const res = await fetch("http://localhost:8080/api/user/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email , password
      })
    })

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Opps not Loged");
    } 
     else {
       console.log("success login");
      history("/");
    }
  }

  console.log(formData)

  return (
    <div className="left">
      <div className="top">
        <h1 className="heading">Welcome to THISISNKC</h1>
        <h6 className="intro">
          Don't have an account?{" "}
          <Link to="/signup" className="span">
            SignUp
          </Link>
        </h6>
      </div>

      <div className="down">
        <form onSubmit={handleSubmit}>
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
          <input type="submit" className="btn" value="Login"></input>
        </form>
      </div>
    </div>
  );
}

export default Left;
