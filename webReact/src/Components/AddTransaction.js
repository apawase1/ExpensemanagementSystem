import axios from "axios";
import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";


// {
//   "category": "extra",
//   "expenditure": 0.0,
//   "income": 10000.0,
//   "user": {
//       "id": 2,
// "username": "ADP",
// "email": "adp@ap.com",
// "password": "a234",
// "mainbalance": 1000.0

//   }
// }


import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = (props) => {
  const uid= props.uid;
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };


    
    const res=await axios.get('http://localhost:7777/api/displayuser/'+uid.id); 
    console.log(JSON.stringify(res.data));
    let expense = {category:text,amount:amount,user:res.data}
   let addExp  =await axios.post('http://localhost:7777/api/addexpense',expense)
   

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Category</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative = expense, positive = income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
    
        <button  type="submit"  className="btn">Add transaction</button>
      </form>
    </>
  );
};
