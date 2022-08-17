import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [input, setInput] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <Input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <button type="submit">Click me</button>
    </Form>
  );
};

const Form = styled.form`
  margin: 0 20rem;

  div {
    width: 100%;
    position: relative;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
  }
`;
const Input = styled.input`
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: #fff;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  outline: none;
  width: 100%;
`;

export default Search;
