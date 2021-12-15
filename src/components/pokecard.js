import React from "react";
import { useQuery } from "@apollo/client";
import { Card, Spin } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { GET_POKEMON } from "../graphql/queries";

function Pokecard({ specie }) {
  const normalizeSpecie = specie
    .toLowerCase()
    .replace(/-/g, "")
    .replace(/\./g, "")
    .replace(/ /g, "");

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: {
      specie: normalizeSpecie,
    },
  });

  if (error) console.log(`Error! ${error}`);

  return (
    <Card
      hoverable
      style={{
        width: "350px",
        backgroundColor: "#00000055",
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center   ",
      }}
      bordered={false}
      bodyStyle={{
        height: "auto",
        backgroundColor: "#ffffff",
        width: "100%",
      }}
      cover={
        loading ? (
          <Spin size="large" style={{ margin: "50px 0" }} />
        ) : (
          <img
            style={{ height: "250px", width: "auto", padding: "25px" }}
            alt="pokemon"
            src={data?.getPokemon?.sprite}
          />
        )
      }
    >
      <Card.Meta title={specie} style={{ width: "100%" }} />
      <Link to={"/pokemon/" + normalizeSpecie}>
        <LinkOutlined />
      </Link>
    </Card>
  );
}

export default Pokecard;
