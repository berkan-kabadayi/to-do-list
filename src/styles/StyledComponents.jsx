import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 20px;
`;

export const TextField = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #282b29;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 50px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
`;

export const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-bottom: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: ${({done}) => (done ? "line-through" : "none")};
  opacity: ${({ done }) => (done ? 0.6 : 1)};
`;

export const EditDeleteContainer = styled.div`
  display: flex;
  gap: 10px;
`;
