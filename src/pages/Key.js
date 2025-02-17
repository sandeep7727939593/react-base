import { useState } from "react";

const orders = [
    { orderId: 101, customerName: "John Doe", priority: 3 },
    { orderId: 102, customerName: "Jane Smith", priority: 2 },
    { orderId: 103, customerName: "Alice Brown", priority: 1 },
    { orderId: 104, customerName: "Mark Wilson", priority: 3 }
  ];

const Key = () => {
  const [tasks, setTasks] = useState(orders);

  const reOrder = () => {
    const sortedOrders = [...tasks].sort((a, b) => b.priority - a.priority);
    setTasks(sortedOrders);
  };

  return (
    <div>
    <h1>Without Key Issue code</h1>
      <button onClick={reOrder}>Reorder</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <p>{task.customerName} {task.priority}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Key;
