import React from "react";
import "./Modal.scss";
import { BiTimeFive } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiSplitCross } from "react-icons/gi"; //styled cross
// import { ImCross } from "react-icons/im"; //noramal cross

export default function Modal({ task, handleClick, handleChange , modal , toggleModal }) {

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <form onSubmit={handleClick} className="inplus">
            <div className="close-modal" onClick={toggleModal}>
              <div className="ucon">
                <GiSplitCross className="iron" />
              </div>
            </div>
            <div className="wrapper">
              <BiTimeFive
                className="icon"
                style={{
                  padding: ".2rem",
                  marginTop: "1.3rem",
                  position: "absolute",
                }}
              />
              <input
                name="text"
                className="same"
                id="t"
                placeholder="Title"
                type="text"
                value={task}
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
                name="reminder"
                className="same"
                placeholder="Reminder"
                type="time"
                onChange={handleChange}
              ></input>
            </div>
            <input type="submit" className="btn" value="Add"></input>
          </form>
        </div>
      )}
    </>
  );
}
