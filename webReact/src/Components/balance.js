import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = (props) => {
  const balance= props.mainbalance
  const { transactions } = useContext(GlobalContext);
  
  
  
 let num =parseInt(balance)
 
  const total =transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  



  

  

  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{parseInt(total)===0?num:parseInt(total)+num}</h1>
    </>
  );
};
