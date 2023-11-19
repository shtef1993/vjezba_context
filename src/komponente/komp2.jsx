import React, { useContext } from 'react';
import { MyContext } from '../App'; 

const Komp2 = () => {
  const { number } = useContext(MyContext);
  return <p>{number}</p>;
};

export default Komp2;
