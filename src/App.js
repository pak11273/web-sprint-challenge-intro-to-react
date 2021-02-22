import "./App.css";

import React, { useEffect, useState } from "react";

import CharacterList from "./components/CharacterList";
import { addBG } from "./helpers";
import axios from "axios";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        res = res.data.results;
        const withPhotos = addBG(res);
        setCharacters(withPhotos);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
