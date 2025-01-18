import { useState } from 'react'
import './App.css'
function App() {
  const[count, setCount]= useState(0);
  function decrementHandler(){
    setCount(count-1);
  }
  function incrementHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className='container'>
      <div className='heading'>Increment & Decrement</div>
      <div className='count_btn_container'>
        <button onClick={decrementHandler} className='dec_btn'>-</button>
        <div className='count_container'>{count}</div>
        <button onClick={incrementHandler}  className='inc_btn'>+</button>
      </div>
      <button className='resetBtn' onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default App
