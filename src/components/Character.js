import React, { useState } from "react";

import CharacterDetails from "./CharacterDetails";
import styled from "styled-components";

const Styled = styled.div`
  color: blue;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  font-size: 1.3rem;
  font-weight: 600;
  text-shadow: 1px 1px 2px white;
  padding: 10px;
  background: white;
  margin: 20px;
  border: 4px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ src }) => src}) center/cover;
  &:hover {
    cursor: pointer;
  }
`;

export default function Character({ character }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    if (!toggle) {
      e.currentTarget.style.width = "300px";
      e.currentTarget.style.height = "300px";
      e.currentTarget.children[0].style.display = "none";
      e.currentTarget.children[1].style.display = "block";
    } else {
      e.currentTarget.style.width = "100px";
      e.currentTarget.style.height = "100px";
      e.currentTarget.children[0].style.display = "block";
      e.currentTarget.children[1].style.display = "none";
    }
    setToggle(!toggle);
  };

  return (
    <Styled src={character.src} onClick={(e) => handleClick(e)}>
      <div className="name">{character.name}</div>
      <CharacterDetails character={character} />
    </Styled>
  );
}
