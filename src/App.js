import React from 'react'
import Header from './Component/Header'
import Input1 from './Component/Input1'
export default function App() {
  function process()
  {
    alert("hello");
  }
  var c=0;
  
  function inputhandles(event)
  {
       if(event.key=="Backspace")
       {
        c=c-1;
       }
       else
       {
        c=c+1;
       }
       document.getElementById("sp").innerHTML="Count "+c;
  }
  var count=0;
  function inputHandle(event)
  {
    
    if (event.key === "Backspace") 
      {
        if(count<0)
          count=0;
        else
        count=count-1;
      }
      else
      {
        count=count+1;
      }
      document.getElementById("sp").innerHTML="Count "+count;
      if(count>5)
      {
           document.getElementById("inputbox").disabled=true;
      }
  }
  return (
    <div className="container mt-4 text-primary">
      <h3>Task Input Control</h3>
      <hr></hr>
      <Header></Header>
      <Input1></Input1>
      <br></br>
      <button  onClick={process}>Click Here To Call The Function</button>
      <hr />
      <input onChange={inputhandles} type="text" placeholder='Type some thing' />
      <hr>
      </hr>
      <input id="inputbox" onKeyDown={inputHandle} type="text" placeholder='reset function'></input>
      <span id="sp">

      </span>

    </div>
  )
}
