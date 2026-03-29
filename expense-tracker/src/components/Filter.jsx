function Filter({ setFilter }) {
  return (
    <div className="card">
      <h3>Filter</h3>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Salary">Salary</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>
  );
}

export default Filter;