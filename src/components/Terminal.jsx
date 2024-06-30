import React from 'react'
import { useState } from 'react';
import {fetchApi, command} from "../utils/usefetch";
import "./Terminal.css"

const Terminal = () => {

    const [input, setInput] = useState("");
    const [konsole, setConsole] = useState("");

    const handleClick = () => {
        fetchApi()
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleKeyPress = async (e) => {
        if (e.key == 'Enter') {
            setConsole("");
            console.log(input);
            let response = await command(input);

            setTimeout(() => {
                setConsole(response)
            }, 1000);
            setInput('')
        }
    }

    const handleKonsoleChanges = (e) => {
        e.target.scrollTop = e.target.scrollHeight;
    }

  return (
    <>
        <button onClick={() => handleClick()} >
            Lancer le server
        </button>
        <div className="terminal">        
            <textarea name="xqxq" id="konsole" className='konsole' value={konsole} onChange={(e) => handleKonsoleChanges(e)} disabled></textarea>
            <input type="text" value={input} onKeyDown={(e) => handleKeyPress(e)} onChange={(e) => handleChange(e)}/>
        </div>
    </>
  )
}

export default Terminal