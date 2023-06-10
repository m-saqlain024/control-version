import React , {useReducer , useRef, useState} from 'react'

function reducerFun(state , action){
    console.log(state , action)
    if (action.type === "shopping") {
      console.log("ok");
      return state - 100;
    }
    if (action.type === "save") {
      return state + 100 ;
    }
    return state
}
function UseReducer() {
    const initileValue =  1000;
    const [state, dispatch] = useReducer(reducerFun, initileValue);
    const reference = useRef(0)
    const [hide , setShow] = useState(false)
    function handleref(e){
        e.preventDefault()
        console.log(reference.current.value)
        // let name = reference.current.value;
        // name === "" ? alert('plz enter u name ') : setShow(true)
    }
    // console.log(state)
  return (
    <div>
      <h1>Wallet : {state}</h1>
      <div>
        <button onClick={() => dispatch({ type: "shopping" })}>shoping </button>
        <button onClick={() => dispatch({ type: "save" })}>Save</button>

        <h1>react useRef hook </h1>
        <form onSubmit={handleref}>
          <label htmlFor="ref">enter your name here</label>
          <input type="text" ref={reference} id="ref" />
          <button>click me</button>
        </form>
        <h1>{hide ? `Your name is ${reference.current.value} ` : ""}</h1>
      </div>
    </div>
  );
}

export default UseReducer
