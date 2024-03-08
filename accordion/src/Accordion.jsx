import React from 'react'
import { data } from "./data"
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import "./Accordion.css"
import { useState } from 'react';


const Accordion = () => {
    const [toogle, setToogle] = useState(null)

    const toogleText = (id) => {

        setToogle((prevId) => (prevId === id ? null : id))
    }
  return (
    <div className='accordion-container'>
        {data.map((data) => (
            <div className="accordion" key={data.id}>
                <h3 onClick={() => toogleText(data.id)}>{data.heading} {toogle === data.id ? <FiMinus className='icon'/>:<GoPlus className='icon'/>}</h3>
                <p className={toogle === data.id ? "show" : "hide"}>{data.text}</p>
            </div>
        ))}
    </div>
  )
}

export default Accordion
