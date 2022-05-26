import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import List from "./list/List";
import Search from "./search/search";
import "./home.scss"
import Navbar from "../navbar/navbar";

function Home() {
  const [task, setTask] = useState("");
  const [assign, setAssign] = useState([]);
  const [active, setActive] = useState(true);
  const [ search , setSearch] = useState("")
  const [filtertodo , setFiltertodo] = useState([])

  useEffect(()=>{
    let filter = [...assign];
    filter = filter.filter((el)=>{
      let item = el.toLowerCase();
      return item.includes(search.toLowerCase())
    })
    setFiltertodo([...filter])
  },[assign , search])

  function handleChange(event) {
    setTask(event.target.value);
    if (event.target.value === "") {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  function handleDelete(id){
    const NewData = assign.filter((b ,index)=>{
     return index !== id
    })
    console.log(NewData);
    setAssign(NewData)
  }
  

  function handleClick() {
    task==="" ? alert("the task feild can't be empty") :

      setAssign((preValue) => [...preValue, task]);
  
      setTask("");
  }

  return (
    <div className="home">
      <Navbar />
      <div className="main">
        <div className="head">
          <div className="inplus">
          <input
            className="text"
            style={active ? { borderBottom : ".2rem solid red"} : { borderBottom : ".2rem solid gray"}}
            id="t"
            type="text"
            value={task}
            onChange={handleChange}
            placeholder="Enter Something to add to the List"
          ></input>
          <button className="btn" onClick={handleClick}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          </div>
          <Search search={search} setSearch={setSearch}/>
        </div>
      <div className="ul">
       {filtertodo.map((val , index) =>
        <List value={val} id={index} key={index} handleDelete={handleDelete}/>
        )
      }
      </div>
      </div>
    </div>
  );
}

export default Home;
