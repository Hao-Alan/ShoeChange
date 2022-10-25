import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Test = () => {
  const count = useSelector((state) => state.counterSlice.value);

  console.log(count);
  return <div>test</div>;
};

export default Test;
