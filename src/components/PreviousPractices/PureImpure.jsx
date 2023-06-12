import React, {useEffect, useState} from "react";

// pure function which not depend on another function 
function PureFunction(props) {
  return <h1> this is a {props.functioss} function</h1>;
}

// impure function call outside the function which is depend on other function 
function ImporeFunction(props) {
    console.log("this is a  impure function ")
  return <h1>this is a {props.functioss} function</h1>;
}


function PureImpure() {
    const [num , setNum] = useState(0)
    const [toggle , setToggle ] = useState(true)

    function handleClick(){
        setNum(num + 1)
    }
    useEffect(()=>{
        // toggle ? "wellcome to offices" : 'good bye '
        // alert('ok')
    }, [num])

    function handlefunction(){
        setToggle(!toggle)
    }
    useEffect(()=>{
        document.title= toggle ? "wellcome to office " : "good bye"
    }, [toggle])
    
  return (
    <div>
      <PureFunction functioss="Pure " />
      <ImporeFunction functioss="impure" />
      <button onClick={handleClick}>Click Me {num}</button>
      <br />
      <br />
      <button onClick={handlefunction} >show / hide</button>
      {toggle && <h2>Wellcome to office</h2>}
    </div>
  );
}

export default PureImpure;
