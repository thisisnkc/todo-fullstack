import React, { useRef} from 'react'
import "./search.css"
import { BiSearch } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

function Search({search , setSearch}) {

  const icondiv = useRef("")


  function handleChange(event){
      setSearch(event.target.value)
  }

  function handleClick(){
    document.getElementById("icon1").focus();
  document.getElementById("icon1").style.display ="none"
  document.getElementById("icon2").style.display ="flex"
  document.getElementById("icon2").style.visibility ="visible"
      
  }

  return (
    <div className='search'>
      <input type="text" value={search} className='searchinp' placeholder='Search' onChange={handleChange} onClick={handleClick}/>
        <div className="icondiv" ref={icondiv}>
          <BiSearch id="icon1" style={{color:"black"}} className="icon"/>
          <BsArrowRight id="icon2" style={{color:"black" ,display:"none", visibility:"hidden"}} className="icon"/>
        </div>
    </div>
  )
}

export default Search;