import React from "react";
import { Button, TextField } from "../styles/StyledComponents";

function InputForm({ newItemContent, setNewItemContent, addItem }) {
  return (
    <>
      <TextField
        type="text"
        value={newItemContent}
        onChange={(e) => setNewItemContent(e.target.value)}
        placeholder="Add a new item... "
      />
      <Button onClick={addItem}>Add</Button>
    </>
  );
}

export default InputForm;
