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
  const addItem = () => {
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
  return (
    <>
      <Container>
        <InputContainer>
          <InputForm
            newItemContent={newItemContent}
            setNewItemContent={setNewItemContent}
            addItem={addItem}
          />
        </InputContainer>
        <TodoList items={items} onDelete={deleteItem} onEdit={() => {}} />
        {isModalOpen && <EditModal />}
      </Container>
    </>
  );
}

export default App;
