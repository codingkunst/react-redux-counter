import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import Action Creator
import { addNumber, minusNumber } from "./redux/modules/counter";

function App() {
  
  // dispatch 생성
  const dispatch = useDispatch();

  // const number = useSelector((state) => state.counter.number);
  // console.log(number);

  const [number, setNumber] = useState();
  const globalNumber = useSelector((state) => state.counter.number);

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setNumber(+value);
  };

  const onClickAddNumber = () => {
    dispatch(addNumber(number));
  };

  const onClickMinusNumber = () => {
    dispatch(minusNumber(number));
  };

  return (
    <div className='app-style'>
      <div className='count-style'>{globalNumber}</div>
      {/* 입력 */}
      <input className='input-style' type='number' value={number} onChange={onChangeHandler} />
      {/* 버튼 */}
      <div className='btn-style'>
        {/* [-1] 버튼 */}
        {/* <button 
          className='btn-minus'
          onClick={() => {
            dispatch({type: minusOne});
          }}
        >
          -1
        </button> */}
        {/* +1 버튼 */}
        {/* <button
          className='btn-plus'
          onClick={() => {
            dispatch({type: plusOne});
          }}
        >
          +1
        </button> */}

        {/* 빼기 버튼 */}
        <button className='btn-minus' onClick={onClickMinusNumber}>-</button>
        {/* 더하기 버튼 */}
        <button className='btn-plus' onClick={onClickAddNumber}>+</button>
      </div>
    </div>
  )
}

export default App