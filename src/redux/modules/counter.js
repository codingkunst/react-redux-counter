import { type } from "@testing-library/user-event/dist/type";

// 초기 상태값
const initialState = {
  number: 0,
};

// Action value
const PLUS_ONE = 'PLUS_ONE';
const MINUS_ONE = 'MINUS_ONE';

// Action Creator
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  }
};

// 리듀서
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case MINUS_ONE:
      return {
        number: state.number - 1,
      }
    case PLUS_ONE:
      return {
        number: state.number + 1,
      }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;