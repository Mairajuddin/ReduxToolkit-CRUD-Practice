import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
    };
    console.log(data, "data");
    if (data.title && data.description) {
      dispatch(addTodo(data));
      e.target.reset();
    } else {
      console.log("Data is empty or null, dispatch not called.");
    }
    e.target.reset();
  };

  return (
    <form
      onSubmit={addTodoHandler}
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Title"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
            width: "200px",
          }}
        />
        <input
          type="text"
          name="description"
          placeholder="Add Description"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
            width: "200px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#28a745",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
