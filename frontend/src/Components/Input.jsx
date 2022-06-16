import { useState, useRef, useContext } from "react"
import {variablesContext} from "../Context/VariablesContext.jsx"
import "./Input.scss"

export default function Input(props){
    const {cityName, setCityName} = useContext(variablesContext)
    const input = useRef()
    
    const submitHandler = (e) => {

        e.preventDefault()
        setCityName(input.current.value)
        input.current.value =""

    }
    return(

        <form onSubmit={submitHandler} className="Input">
            <input type="text" placeholder="City" ref={input} /> 
        </form>
    )

}