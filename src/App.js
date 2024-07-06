import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import Action Creator
import { minusOne, plusOne } from "./redux/modules/counter";

function App() {
  
  const dispatch = useDispatch(); // dispatch 생성

  const number = useSelector((state) => state.counter.number);
  console.log(number);

  return (
    <div className='app-style'>
      <div className='count-style'>{number}</div>
      {/* 버튼 */}
      <div className='btn-style'>
        {/* [-1] 버튼 */}
        <button 
          className='btn-minus'
          onClick={() => {
            dispatch({type: minusOne});
          }}
        >
          -1
        </button>
        {/* +1 버튼 */}
        <button
          className='btn-plus'
          onClick={() => {
            dispatch({type: plusOne});
          }}
        >
          +1
        </button>
      </div>
    </div>
  )
}

export default App