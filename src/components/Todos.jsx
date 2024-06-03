import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/Todo/todoSlice";
import { useState } from "react";
import UpdateModal from "./UpdateModal";

const Todos = () => {
  const todoArr = useSelector((state) => state.todos);
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const dispatch = useDispatch();
  const handleOpenModal = (id) => {
    const todoVal = todoArr.find((todo) => todo.id === id);
    console.log(todoVal, "shdkjjahskjdhkjahshdjhas");
    setUpdateData(todoVal);
    setOpen(true);
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f0f0f0",
        width: "300px",
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "24px",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Todos
      </div>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {todoArr.map((todo) => (
          <>
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                marginBottom: "5px",
                borderRadius: "5px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              {todo.title}

              <button
                onClick={() => handleOpenModal(todo.id)}
                style={{
                  backgroundColor: "#007bff",
                  border: "none",
                  borderRadius: "3px",
                  color: "#fff",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                edit
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                style={{
                  backgroundColor: "#ff4d4d",
                  border: "none",
                  borderRadius: "3px",
                  color: "#fff",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </li>
            <UpdateModal
              setOpen={setOpen}
              open={open}
              data={updateData}
              id={todo.id}
            />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
