import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import { Container, InputContainer } from "./styles/StyledComponents";
import { nanoid } from "nanoid/non-secure";
import TodoList from "./components/TodoList";

function App() {
  const [items, setItems] = useState([]);
  const [newItemContent, setNewItemContent] = useState("");
  const addItem = () => {
    const newItem = {
      id: nanoid(),
      content: newItemContent,
      done: false,
    };
    console.log(newItem);
    setItems((prevItems) => [...prevItems, newItem]);
    console.log(items);
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
        <TodoList items={items} onDelete={() => {}} onEdit={() => {}}/>
      </Container>
    </>
  );
}

export default App;
