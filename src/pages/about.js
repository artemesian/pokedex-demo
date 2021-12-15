import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Spin } from "antd";

import { GET_ABOUT_POKEMON } from "../graphql/queries";
import { loadPokemon } from "../redux/pokemon/pokemon.actions";

const About = () => {
  const [loading, setLoading] = useState(false);
  const { specie } = useParams();
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state.pokemon);

  const [getAboutPokemon, { error }] = useLazyQuery(GET_ABOUT_POKEMON);

  useEffect(() => {
    setLoading(true);
    getAboutPokemon({
      variables: {
        specie: specie,
      },
      onCompleted: (result) => {
        const {
          getPokemon: { num, species, sprite, flavorTexts },
        } = result;

        dispatch(
          loadPokemon({
            id: Math.abs(num),
            species,
            sprite,
            desc: flavorTexts[0]?.flavor,
          })
        );
        setLoading(false);
      },
    });
  }, []);

  if (error) console.log(`Error! ${error}`);

  return loading ? (
    <Spin size="large" style={{ margin: "50px 0" }} />
  ) : (
    <div
      style={{
        backgroundColor: "black",
        maxWidth: "1300px",
        margin: "auto",
        padding: "25px",
      }}
    >
      <h1 style={{ color: "whitesmoke", fontWeight: "bolder" }}>
        {pokemon.species}
        &nbsp;
        <span style={{ opacity: "0.5" }}>No: {Math.abs(pokemon.id)} </span>
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <img
          src={pokemon.sprite}
          alt="pokemon sprite"
          style={{ width: "450px", margin: "50px 0" }}
        />
        <div style={{ width: "400px" }}>
          <i style={{ color: "gray", fontSize: "18px" }}>
            {pokemon.desc ?? "No description available"}
          </i>
        </div>
      </div>
    </div>
  );
};

export default About;
