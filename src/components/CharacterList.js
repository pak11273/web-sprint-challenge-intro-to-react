import Character from "./Character";
import React from "react";

export default function CharacterList({ characters }) {
  return characters.map((character) => {
    return <Character key={character.created} character={character} />;
  });
}
