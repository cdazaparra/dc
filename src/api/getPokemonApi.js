import axios from "axios";

const getPokemonApi = (url) => {
  return axios.get(url).then(async (res) => {
    // Arreglo donde guardamos la info de los pockemons
    let pokemons = [];
    // Por cada resultado buscamos la info
    await axios.all(
      res.data.results.map((pokemon) => {
        //Solicitud api del pokemon
        return axios.get(pokemon.url).then((res) => {
          // Guardamos la respuesta de la api https://pokeapi.co/api/v2/pokemon/[ID]/
          pokemons.push(res.data);
          // Comentario: Se puede guardar solo lo que es necesario, ej, name, sprites, etc.
        });
      })
    );

    // Descomentar
    //this.setState({ pokemons });

    // --- Borrar desde ---
    // Ejemplo: info del pokemon 1
    // let pokemon = pokemons[1];
    // console.log("name:", pokemon.name);
    // console.log("front default:", pokemon.sprites.front_default);
    return pokemons;
    // --- Borrar hasta ---
  });
};

export default getPokemonApi;
