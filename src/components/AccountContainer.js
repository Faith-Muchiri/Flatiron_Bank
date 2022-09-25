import React,{useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

    //store fetched data using a useState
    const [transactions, setTransactions] =useState([]);
    //fetch data uing a useEffect
    useEffect(() =>{
      fetch(' http://localhost:8001/transactions')
      .then(res => res.json())
      .then(transc => setTransactions(transc))
    },[])
    console.log(transactions)

  function handleUpdateOnSubmission(AddTransactionForm){
    console.log(AddTransactionForm)
    setTransactions(transactions =>[...transactions,AddTransactionForm])

    const serverOptions={
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(AddTransactionForm)
    }
   
    fetch('http://localhost:8001/transactions',serverOptions)
    .then(res => res.json())
    .then(setTransactions(transactions =>[...transactions,AddTransactionForm]))
    .catch(console.log("Error"))
  }

  function handleOnSearch(search ){
    setTransactions(transactions =>
      transactions.filter(transactions => 
      transactions.description.includes(search)))
  }
  return (
    <div>
      <Search onSearch={handleOnSearch}/>
      <AddTransactionForm onSubmission={handleUpdateOnSubmission}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
