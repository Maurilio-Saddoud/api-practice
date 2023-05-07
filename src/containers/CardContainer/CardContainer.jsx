import React, { useEffect, useState } from "react";
import BasicCard from "../../components/BasicCard";
import "./CardContainer.css";

const CardContainer = () => {
  const INITIAL_OBJ = {
    name: "-",
    height: "-",
    weight: "-",
    types: [{ type: { name: "-" } }],
    sprites: {
      front_default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fpokeball&psig=AOvVaw0AY-C4iyAGx7F_ZUIjcYhc&ust=1663894850875000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjsy72Zp_oCFQAAAAAdAAAAABAJ",
    },
  };
  const MAX_POKEMON = 904;
  const MAX_TIMEOUT = 1000;
  const [pokemon, setPokemon] = useState(INITIAL_OBJ);
  const [isLoading, setIsLoading] = useState(true);

  const randNum = () => {
    return Math.floor(Math.random() * MAX_POKEMON);
  };

  const randTime = () => {
    return Math.floor(Math.random() * MAX_TIMEOUT);
  };

  const fetchNewPokemon = () => {
    setIsLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randNum()}/`)
      .then((res) => {
        return res.json();
      })
      .then((newPokemon) => {
        setPokemon(newPokemon);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, randTime());
  };

  useEffect(() => {
    fetchNewPokemon();
  }, []);

  return (
    <div className="card-container">
      <BasicCard
        pokemon={pokemon}
        refresh={fetchNewPokemon}
        isLoading={isLoading}
      />
    </div>
  );
};

export default CardContainer;
