import { useState, useEffect } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Chart from "./components/Chart";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions([...transactions, tx]);
  };

  const income = transactions
    .filter(tx => tx.amount > 0)
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(tx => tx.amount < 0)
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="container">
      <h1 className="title">💰 Expense</h1>

      {/* Summary */}
      <div className="summary">
        <div className="card">💰 Balance: ₹{income + expense}</div>
        <div className="card">📈 Income: ₹{income}</div>
        <div className="card">📉 Expense: ₹{Math.abs(expense)}</div>
      </div>

      {/* Top Section */}
      <div className="top-section">
        <AddTransaction addTransaction={addTransaction} />
        <Filter setFilter={setFilter} />
      </div>

      {/* Dashboard */}
      <div className="dashboard">
        <Chart transactions={transactions} />
        <TransactionList transactions={transactions} filter={filter} />
      </div>
    </div>
  );
}

export default App;
