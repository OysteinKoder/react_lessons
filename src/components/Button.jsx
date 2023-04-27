import styled from "styled-components";

export const Button = styled.button`
  margin-top: 2rem;
  width: fit-content;
  border: #650897 solid 3px;
  border-radius: 15px;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #242424;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }
`;
