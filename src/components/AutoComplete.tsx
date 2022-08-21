import React, { SyntheticEvent } from "react";
import { Suggestions } from "../Types";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  data: Suggestions[];
  clickHandler: (e: SyntheticEvent) => void;
};

const AutoComplete: React.FC<Props> = ({ data, clickHandler }) => {
  return (
    <Autocomplete>
      {data.map((suggestion) => {
        return (
          <li key={suggestion.id} onClick={clickHandler}>
            <Link to={`/recipe/${suggestion.id}`}>{suggestion.title}</Link>
          </li>
        );
      })}
    </Autocomplete>
  );
};

const Autocomplete = styled.ul`
  text-decoration: none;
  position: absolute;
  width: 100%;
  z-index: 100;
  top: 4.2rem;
  border-radius: 8px;
  background: linear-gradient(35deg, #494949, #313131);
  li {
    margin: 1px 0;
    list-style: none;
    border-bottom: 1px solid #ccc;
    font-size: 1.5rem;
    color: #ccc;
    padding: 1rem 1rem;
    outline: none;
    width: 100%;
    cursor: pointer;
    :last-child {
      border: none;
    }
    a {
      text-decoration: none;
      color: inherit;
      width: 100%;
    }
    :hover {
      color: #fff;
    }
  }
`;

export default AutoComplete;
