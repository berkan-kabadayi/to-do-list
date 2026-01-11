import React from "react";
import styled from "styled-components";
import { EditDeleteContainer, ListBox } from "../styles/StyledComponents";
import { FaEdit } from '@react-icons/all-files/fa/FaEdit';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';


const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

function TodoItem({ item, onDelete, onEdit }) {
  return (
    <>
      <ListBox>
        <input type="checkbox" checked={item.done} />
        <span>{item.content}</span>
        <EditDeleteContainer>
          <Button onClick={() => onEdit(item.id, item.content)}>
            <FaEdit />
          </Button>
          <Button onClick={() => onDelete(item.id)}>
            <FaTrash />
          </Button>
        </EditDeleteContainer>
      </ListBox>
    </>
  );
}

export default TodoItem;
