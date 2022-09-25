import React, {useState} from 'react'

function AddTransactionForm({onSubmission}) {
  const [formData, setFormData] = useState({
    date:"",
    description:"",
    category:"",
    amount:0 
  })
  
  function handleChange(e){
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault ()
    onSubmission(formData)
    //reset form
    setFormData({
      date:"",
      description:"",
      category:"",
      amount:0 
    })
  }


  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input onChange={handleChange} type="date" value={formData.date} name="date" />
          <input onChange={handleChange} type="text" value={formData.description} name="description" placeholder="Description" />
          <input onChange={handleChange} type="text" value={formData.category} name="category" placeholder="Category" />
          <input onChange={handleChange} type="number" value={formData.amount} name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit" onClick={AddTransactionForm}>
          Add Transaction
        </button>
      </form>  
    </div>
  );
}

export default AddTransactionForm;
