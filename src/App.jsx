import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import { Container, InputContainer } from "./styles/StyledComponents";
import { nanoid } from "nanoid/non-secure";
import TodoList from "./components/TodoList";
import EditModal from "./components/EditModal";

function App() {
  const [items, setItems] = useState([]);
  const [newItemContent, setNewItemContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItemId, setEditingItemId] = useState(null);
  const [inputEdit, setInputEdit] = useState("");

  const addItem = () => {
    if (!newItemContent.trim()) return;

    const newItem = {
      id: nanoid(),
      content: newItemContent,
      done: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setNewItemContent("");
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleDone = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const openEditModel = (id, content) => {
    setEditingItemId(id);
    setInputEdit(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItemId(null);
    setInputEdit("");
  };

  const saveEditedItem = () => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === editingItemId ? { ...item, content: inputEdit } : item
      )
    );
    closeModal();
  };

  return (
    <Container className="todo-card">
      <div className="input-fixed">
        <InputContainer>
          <InputForm
            newItemContent={newItemContent}
            setNewItemContent={setNewItemContent}
            addItem={addItem}
          />
        </InputContainer>
      </div>
      <div className="todo-list">
        <TodoList
          items={items}
          onDelete={deleteItem}
          onEdit={openEditModel}
          onToggle={toggleDone}
        />
      </div>
      {isModalOpen && (
        <EditModal
          inputEdit={inputEdit}
          onChange={(e) => setInputEdit(e.target.value)}
          onClose={closeModal}
          onSave={saveEditedItem}
        />
      )}
    </Container>
  );
}

export default App;
