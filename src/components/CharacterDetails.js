import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  display: none;
`;

export default function CharacterDetails({ character }) {
  return (
    <>
      <Styled>
        <p>eye color: {character.eye_color}</p>
        <p>gender: {character.gender}</p>
        <p>height: {character.height}</p>
        <p>skin color: {character.skin_color}</p>
      </Styled>
    </>
  );
}
