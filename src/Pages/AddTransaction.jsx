import React from "react"
import"../styles/AddTransaction.css";
function AddTransaction(){
    return(
        <div className ="add-transaction-conatiner">
            <h2>Add Transaction</h2>
            <div className = "transaction-box">
                <div className="transaction-type">
                    <label>
                        <input type="radio" value="Expense"/>Expense
                    </label>
                    <label>
                        <input type="radio" value="Income"/>Income
                    </label>
                </div>
                <input type ="number" plceholder="Amount (₹)"/>
                <select>
                    <option value="">Select Category</option>
                    <option value="food">Food</option>
                    <option value="salary">Salary</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="transportation">Transportation</option>
                    <option value="utilities">Utilities</option>
                    <option value="health">Health</option>
                    <option value="others">Others</option>
                </select>
                <textarea  palceholder = "description"></textarea>
                <input type="date"/>
                <button>Add Transaction</button>
            </div>
        </div>
    )
}
export default AddTransaction;