import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  color: blue;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  font-size: 1.3rem;
  font-weight: 600;
  text-shadow: 2px 2px 10px white;
  padding: 10px;
  background: white;
  margin: 20px;
  border: 4px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ src }) => src}) center/cover;
`;

export default function Character({ character }) {
  return (
    <Styled src={character.src}>
      <div className="name">{character.name}</div>
    </Styled>
  );
}
