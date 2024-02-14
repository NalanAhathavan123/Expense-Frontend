const ExpenseItem = (props)=>{
    const { title , amount ,id , deleteExpense } = props
    const handleDelete = ()=>{
      deleteExpense(id);
      console.log(id);
       
    }
    return(
         <>
          <div className={`expense-item ${amount>0 ?'positive' :'negative'}`}>
           <div className="expense-title">{title}</div>
           <div className="expense-amount ">{amount}</div>
          </div>
          <div className="delete-btn">
            <button className="btn-del" type="button" onClick={handleDelete}>Delete</button>
           </div>
         </>
    )
}

export default ExpenseItem;