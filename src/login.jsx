import React from "react";
import {useNavigate} from "react-router-dom";


export default function Login () {

    const navigate = useNavigate ()

    const handleHome = () => {
        navigate("home")
    }
    const handlePlus = () => {
        navigate("Plus")
    }

    return(
    <div>
    <h1>login</h1>
    <button onClick={handleHome}>home</button>
    <button onClick={handlePlus}>Plus</button>
    </div>
    )
}