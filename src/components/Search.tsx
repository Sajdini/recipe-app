//react hooks
import React, { useState, useEffect, SyntheticEvent } from "react";
//react router
import { useNavigate } from "react-router-dom";
//styled components and icons
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
// type
import { Suggestions } from "../Types";
import AutoComplete from "./AutoComplete";

const Search = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([] as Suggestions[]);
 
  const navigate = useNavigate();

  // suggestions fetch
  useEffect(() => {
    if (input.length > 3) {
      fetch(
        `https://api.spoonacular.com/recipes/autocomplete?number=5&query=${input}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [input]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.length > 0) navigate("/searched/" + input);
    setData([]);
  };

  // this clickhandler servers only to close suggestions list
  const clickHandler = (e: SyntheticEvent) => {
    setData([]);
  };

  return (
    <Form onSubmit={submitHandler}>
      <FaSearch />
      <div>
        <Input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        {input.length > 3 && (
          <AutoComplete data={data} clickHandler={clickHandler} />
        )}
      </div>
    </Form>
  );
};

const Form = styled.form`
  position: relative;
  div {
    width: 100%;
    position: relative;
  }
  svg {
    position: absolute;
    top: 1rem;
    left: 0.5rem;
    fill: #ccc;
    width: 2rem;
    height: 2rem;
    z-index: 100;
  }
`;

const Input = styled.input`
  position: relative;
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 1rem;
  outline: none;
  width: 100%;
  margin-bottom: 1px;
`;

export default Search;
