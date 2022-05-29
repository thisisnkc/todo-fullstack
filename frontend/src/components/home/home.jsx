import { useEffect, useState } from "react";
import List from "./list/List";
import Search from "./search/search";
import "./home.scss";
import Navbar from "../navbar/navbar";
import Modal from "./Modal/Modal";

function Home() {
  const [task, setTask] = useState("");
  const [assign, setAssign] = useState([]);
  const [search, setSearch] = useState("");
  const [filtertodo, setFiltertodo] = useState([]);

  useEffect(() => {
    let filter = [...assign];
    filter = filter.filter((el) => {
      let item = el.toLowerCase();
      return item.includes(search.toLowerCase());
    });
    setFiltertodo([...filter]);
  }, [assign, search]);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleDelete(id) {
    const NewData = assign.filter((b, index) => {
      return index !== id;
    });
    console.log(NewData);
    setAssign(NewData);
  }

  function handleClick(event) {
    event.preventDefault();
    if(task === "")  alert("the task feild can't be empty")
    else{
    setAssign((preValue) => [...preValue, task]); setModal(!modal)
    setTask("");

  }}

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  console.log(modal);

  const count = assign.length === 0 ? true : false;
  console.log(count);

  return (
    <div className="home">
      <Navbar />
      <div className="parent">
        <div className="head">
          <Modal
            task={task}
            handleChange={handleChange}
            handleClick={handleClick}
            toggleModal={toggleModal}
            modal={modal}
          />
          {count ? <></> : <Search search={search} setSearch={setSearch} />}
          {count ? <></> : <button onClick={toggleModal} className="btn-modal">
               Add tasks
             </button>}
        </div>
        <div className="ul">
          {filtertodo.map((val, index) => (
            <List
              value={val}
              id={index}
              key={index}
              handleDelete={handleDelete}
            />
          ))}
        </div>
       { count && <div className="nothing">
          Looks like you don't have any Tasks{" "}
          <button onClick={toggleModal} className="btn-modal">
            Add tasks
          </button>
        </div>}
      </div>
    </div>
  );
}

export default Home;
