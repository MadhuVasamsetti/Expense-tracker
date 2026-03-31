import { PieChart, Pie, Cell, Tooltip } from "recharts";

function Chart({ transactions }) {
  const data = [
    {
      name: "Income",
      value: transactions
        .filter((tx) => tx.amount > 0)
        .reduce((acc, tx) => acc + tx.amount, 0),
    },
    {
      name: "Expense",
      value: transactions
        .filter((tx) => tx.amount < 0)
        .reduce((acc, tx) => acc + Math.abs(tx.amount), 0),
    },
  ];

  return (
    <div className="card">
      <h3>Overview</h3>
      <PieChart width={250} height={250}>
        <Pie data={data} dataKey="value" outerRadius={80}>
          <Cell fill="#4CAF50" />
          <Cell fill="#FF4D4D" />
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Chart;