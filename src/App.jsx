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
        <TodoList items={items} onDelete={() => {}} onEdit={() => {}} />
       {isModalOpen && (
        <EditModal/>
       )}
      </Container>
    </>
  );
}

export default App;
