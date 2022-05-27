import { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import List from "./list/List";
import Search from "./search/search";
import "./home.scss"
import Navbar from "../navbar/navbar";

function Home() {
  const [task, setTask] = useState("");
  const [assign, setAssign] = useState([]);
  const [search, setSearch] = useState("")
  const [filtertodo, setFiltertodo] = useState([])

  useEffect(() => {
    let filter = [...assign];
    filter = filter.filter((el) => {
      let item = el.toLowerCase();
      return item.includes(search.toLowerCase())
    })
    setFiltertodo([...filter])
  }, [assign, search])

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleDelete(id) {
    const NewData = assign.filter((b, index) => {
      return index !== id
    })
    console.log(NewData);
    setAssign(NewData)
  }


  function handleClick(event) {
    event.preventDefault();
    task === "" ? alert("the task feild can't be empty") :

      setAssign((preValue) => [...preValue, task]);

    setTask("");
  }

  return (
    <div className="home">
      <Navbar />
      <div className="parent">
        <div className="main">
          <div className="head">
          <form onSubmit={handleClick} className="inplus">
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
            <Search search={search} setSearch={setSearch} />
          </div>
          <div className="ul">
            {filtertodo.map((val, index) =>
              <List value={val} id={index} key={index} handleDelete={handleDelete} />
            )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
