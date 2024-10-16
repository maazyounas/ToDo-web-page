import React, { useState } from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  const [task, settask] = useState("");
  const [addtask, setaddtask] = useState(false);
  const [tasklist, settasklist] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      settasklist([...tasklist, task]);
      settask("");
      setaddtask(true);
    }
  };

  const handleDelete = (index) => {
    const list = [...tasklist];
    list.splice(index, 1);  // Remove the task at the given index
    settasklist(list);      // Update the state with the modified list
  };

  return (
    <div className="App">
      <div className="content">
        <div className="heading">
          <h1>Todo List</h1>
        </div>
        <div className="afterheading">
          <div className="input">
            <input
              placeholder="Enter Your Task Here"
              value={task}
              onChange={(e) => settask(e.target.value)}
            />
          </div>
          <div className="button">
            <button onClick={handleAdd}>Add task</button>
          </div>
        </div>
      </div>

      {addtask && (
        <div className="taskList">
          <h2>Tasks</h2>
          <ul>
            {tasklist.map((t, index) => (
              <li key={index} className="taskli">
                {t} <MdDelete onClick={() => handleDelete(index)} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Todo;
