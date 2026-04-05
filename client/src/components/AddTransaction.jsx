import { useState } from "react";

function AddTransaction({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTx = {
      id: Date.now(),
      text,
      amount: +amount,
      category,
    };

    addTransaction(newTx);
    setText("");
    setAmount("");
  };

  return (
    <div className="card">
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount (+income, -expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Travel</option>
          <option>Salary</option>
          <option>Shopping</option>
        </select>

        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTransaction;
