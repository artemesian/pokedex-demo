import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

import Pokecard from "../components/pokecard";

import { GET_POKEDEX_SPECIES } from "../graphql/queries";
import { listPokedex } from "../redux/pokedex/pokedex.actions";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { fetchFrom, pokedex } = useSelector((state) => state.pokedex);

  const [getPokedex, { error }] = useLazyQuery(GET_POKEDEX_SPECIES);

  const fetchPokedex = () => {
    setLoading(true);
    getPokedex({
      variables: {
        offset: fetchFrom,
        take: 10,
      },
      onCompleted: (result) => {
        setLoading(false);
        dispatch(listPokedex(result.getAllPokemonSpecies ?? []));
      },
    });
  };

  useEffect(() => {
    if (pokedex.length <= 0) {
      fetchPokedex();
    }
  }, []);

  if (error) console.log(`Error! ${error}`);

  return (
    <div style={{ paddingBottom: "50px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pokedex?.map((specie, i) => (
          <Pokecard key={i + specie} specie={specie} />
        ))}
      </div>
      <Button
        type="primary"
        size="large"
        style={{ margin: "25px 0" }}
        loading={loading}
        onClick={() => fetchPokedex()}
      >
        See More
      </Button>
    </div>
  );
};

export default Home;
