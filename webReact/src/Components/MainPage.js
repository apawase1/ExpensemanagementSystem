
import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { Balance } from './balance';
import { IncomeExpenses } from './IncomeExpenses';
import { Transaction } from './Transaction';
import { TransactionList } from './TransactionList';
import { GlobalProvider } from '../context/GlobalState';
// import {Header} from './Header';
import {AddTransaction} from './AddTransaction';
import jsPDF from 'jspdf';



const MainPage = () => {

  const id = useParams(); 
  const [balance, setBalance] = useState(0)
 
  

  useEffect(()=>{
    
    
      accessdata()

    
  },[])

  const accessdata= async()=>{
    
    // const token = localStorage.getItem('jwtToken');
  const res= await axios.get('http://localhost:7777/api/displayuser/'+id.id);
    console.log(res.data);
    setBalance(res.data.mainbalance)
      console.log(res.data.mainbalance)
  }

  const Logout = () => {
    
        localStorage.clear();
        window.location='/signin';
    
  } 

  const generatePdf=()=>{
    var doc = new jsPDF('p','pt','a4')
    let month = new Date();
    doc.html(document.querySelector("#download"),{
      callback : function(pdf){
        pdf.save(month.toLocaleDateString() +".pdf");
      }
    })
   }
 
    
  
  return (
    
  <div>
   
   <GlobalProvider>
      {/* <Header /> */}
      <div className="container row">
        <center>
        
        <div id='download'className='col'>
        <Balance mainbalance={balance} />
        <IncomeExpenses />
        <TransactionList />
        </div>
        <AddTransaction uid={id}/>
        </center>
      </div>
    </GlobalProvider>

    <div>
    <button onClick={generatePdf} className="btn btn-primary btn-block">Download PDF</button>
     <button onClick={Logout} className="btn btn-primary btn-block">Logout</button>
     
   </div>
  
</div>
  
  )
}
export default MainPage
