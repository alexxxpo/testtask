import { useState } from "react";

function TaskItem({ text }) {
  const [complete, setComplete] = useState(false);
  function checkHandle() {
    setComplete((prev) => !prev);
  }
  return (
    <li>
      <div style={{ display: "flex", width: 300 }}>
        <input type="checkbox" style={{ marginRight: 30 }} onChange={checkHandle}/>
        <p style={{textDecoration: complete ? 'line-through' : 'none'}}>{text}</p>
      </div>
    </li>
  );
}
export default TaskItem;
