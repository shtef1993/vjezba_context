import React, { useContext } from 'react';
import { MyContext } from '../App'; 

const Komp1 = () => {
  const { text } = useContext(MyContext);

  return <p>{text}</p>;
};

export default Komp1;
