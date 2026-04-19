function TransactionList({ transactions, filter }) {
  const filtered =
    filter === "All"
      ? transactions
      : transactions.filter((tx) => tx.category === filter);

  return (
    <div className="card">
      <h3>Transactions</h3>
      <ul>
        {filtered.map((tx) => (
          <li
            key={tx.id}
            className={tx.amount > 0 ? "income" : "expense"}
          >
            {tx.text} - ₹{tx.amount} ({tx.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
