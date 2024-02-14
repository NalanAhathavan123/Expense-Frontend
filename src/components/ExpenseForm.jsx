import { useState } from "react";
const ExpenseForm = (props)=>{
    const {addExpense} = props
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState();
    const[errors,setErrors] = useState({})
    const handleSubmit=(e)=>{
        e.preventDefault()
        let err={};
        if(title === '' && amount ===0){
            alert('Please enter valid title and amount')
            return;
        }
        if(title.length<3){
            err.title ='Title should be atleast 3 characters long'
             
        }
        if(!amount){
             err.amount = 'Enter a valid amount'
             
        }

        if(Object.keys(err).length>0){
            setErrors({...err})
            return
        }
        addExpense(title,amount)
        setTitle('')
        setAmount(0)
    }
 
    const handleTitleChange = (e)=>{
        setErrors({...errors,title:''})
        setTitle(e.target.value)
    }
    const handleAmountChange =(e)=>{
        setErrors({...errors,amount:''})
        setAmount(e.target.value)
    }
    return (

<div className="input">
<form onSubmit={handleSubmit} >
    <div>
    <label>Title:</label>
    <input className="input-title" type="text"  value={title} onChange={handleTitleChange}/>
    {errors.title? <div className="errors">{errors.title}</div> : null}
    </div>   
    <div>
    <label>Amount:</label>
      <input className="input-amount" type="number" value={amount} onChange={handleAmountChange} />
      {errors.amount? <div className="errors">{errors.amount}</div> : null}
    </div>
    <div className="btn-cont">
    <button className="btn-trans" type="submit">Add Transaction</button>
    </div>
  </form>
</div>
    )
}

export default ExpenseForm;

