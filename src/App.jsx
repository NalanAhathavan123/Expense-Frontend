import ExpenseItem from "./components/ExpenseItem"
import ExpenseForm from "./components/ExpenseForm";
import { useEffect, useState } from "react";
import  axios  from "axios";
const App = () =>{
 
let [expenses,setExpenses] = useState([])

useEffect(()=>{
  axios.get('https://expensetracker-api-s4j8.onrender.com/get-entries').then(res=> console.log(res.data) ).catch(res=> console.log(res))
   
},[])

const addExpense =(title,amount)=>{
  const nextId = expenses[expenses.length - 1].id+1
   setExpenses([...expenses,{ id: nextId , title:title,amount:amount}])
}

const  deleteExpense = (id)=>{
  setExpenses(expenses.filter((exp)=> exp.id !== id))
}
let income = 0
let expense =0
expenses.forEach((exp) =>{
  if(exp.amount > 0){
    income += exp.amount
  }
  else{
   expense -=exp.amount
  }
})
let balance = income -expense;
  return (
    <>
<div>
  <div className="head">Expense Tracker</div>
  <div className="balanace">Balanace: &#x20B9;{balance}</div>
  <div className="income-expense-container">
    <div className="income">
      <span className="title">Income</span>
      <span> &#x20B9;{income}</span>
    </div>
    <div className="block"></div>
    <div className="expenses">
      <span className="title">Expense</span>
      <span>&#x20B9;{expense}</span>
    </div>
  </div>
    <ExpenseForm addExpense ={addExpense} />
</div>


    {expenses.map((expense) => (
    
    
    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount}  id={expense.id} deleteExpense={deleteExpense}/>
    
    )
    )
  }
    </>
  )
}
export default App; 