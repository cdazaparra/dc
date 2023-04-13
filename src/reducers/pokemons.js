const initialState = { pokemos: [] };
import React from "react";
import { SET_POKEMONS } from "../actions/types";

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};

export default pokemonsReducer;
