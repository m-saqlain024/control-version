import React, { useState } from 'react'

function Saqi() {
    const [name , SetName] = useState("saqlian")
    const [fname, setFullName] = useState({ father_name: "Issa" });
    const [vname , setVname]  = useState({place : "hackuchar"})
    const [greeting , setGreeting ] = useState({
        greet : "hello",
        place : "world"
    })
    console.log(name)
    console.log('this is a being murshid')
    function handlename(){
        SetName('Muhammad saqlain')
    }
    function handleFname(){
        console.log('this is a ok')
        setFullName({father_name : 'Muhammad Issa'})
    }

    function handlevName(){
        let pname = {...vname}
        pname.place = 'hackuchar nager'
        setVname(pname)
    }
  
    // set greeting in arrow function and spread opertaor 
    function handleGreet(){
        setGreeting((saqi)=>{
            return { ...saqi  , place : "world-wide web "}
        })
    }
  return (
    <>
    <h1>{name}</h1>
    <button onClick={handlename}>change name</button>
    <h1>Father name {fname.father_name}</h1>
    <button onClick={handleFname}>show fullName</button>

    <h1>vallage name {vname.place}</h1>
    <button onClick={handlevName}> show full Address </button>

    <h1>{greeting.greet +" " + greeting.place}</h1>
    <button onClick={handleGreet}>change place</button>
    </>
  )
}

export default Saqi
