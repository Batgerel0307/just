import React from "react";
import {Route, Routes,} from "react-router-dom"
import Login from "./login";
import Home from "./home";
import Plus from "./plus";


export default function App(){
return(
  <Routes>
    <Route path="/" element = {<Login/>}></Route>
    <Route path="/home" element = {<Home/>}></Route>
    <Route path="/plus" element = {<Plus/>}></Route>
    <Route path="/"></Route>
  </Routes>
) 
}