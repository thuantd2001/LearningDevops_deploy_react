import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrease, increase } from '../../Reducer/Counter';
function Count() {
  const counter = useSelector((state: any) => state.counter); // useSelector là một hook giúp lấy 1 cái state trong root của mình
  const dispatch = useDispatch(); // sử dụng dispatch để gửi action
  const handleIncreseClick = () => {
    const action = increase();
    dispatch(action);
  };
  const handleDecreseClick = () => {
    const action = decrease();
    dispatch(action);
  };
  return (
    <div style={{ color: 'white' }}>
      <h1>Counter</h1>
      <p>Counter {counter}</p>
      <button onClick={() => handleIncreseClick()}>increase</button>
      <button onClick={() => handleDecreseClick()}>decrease</button>
    </div>
  );
}
export default Count;
