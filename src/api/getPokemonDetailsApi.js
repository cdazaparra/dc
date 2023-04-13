import axios from "axios";

const getPokemonDetailsApi = (url) => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export default getPokemonDetailsApi;
