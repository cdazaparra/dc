import axios from "axios";

const getCharactersApi = (url) => {
  return axios.get(url).then(async (res) => {
    let characterArray = [];
    const characters = res.data.characters;
    await axios.get(characters).then(async (res) => {
      await axios.all(
        res.data.results.map((character) => {
          characterArray.push(character);
        })
      );
      // console.log("res.data.results______", res.data.results);
    });
    return characterArray;
  });
};

export default getCharactersApi;
