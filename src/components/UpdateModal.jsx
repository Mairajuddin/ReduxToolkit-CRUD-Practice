import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { updateTodo } from "../features/Todo/todoSlice";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal({ open, setOpen, data, id }) {
  console.log(data, "DATA REACHED.....");
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description,
  });
  React.useEffect(() => {
    setFormData({
      title: data.title,
      description: data.description,
    });
  }, [data]);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    // Update the corresponding field in the form data
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the action to update the todo
    dispatch(updateTodo({ ...formData, id: data.id }));
    // Close the modal
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <TextField
              name="title"
              fullWidth
              value={formData.title}
              onChange={handleChange}
            />
            {/* Display description */}
            <TextField
              fullWidth
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <Button variant="contained" type="submit" fullWidth>
              Update
            </Button>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
