import { animals } from "./data.js";
window.onload = () => {
  console.log("loaded", document.querySelector(".searchResult"));
  startApp();
};

const createAnimal = (animal) => {
  const animalDiv = document.createElement("div");
  animalDiv.innerHTML = animal.name;
  return animalDiv;
};

const debounce = (callback) => {
  let timeout;

  return (argument) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(argument), 3000);
  };
};

const startApp = () => {
  //handle input
  const onInput = ({ target: { value } }) => {
    const searchResult = document.querySelector(".searchResult");
    //clear all content
    searchResult.innerHTML = "";
    //display result
    console.log("searchResult", searchResult);
    if (searchResult) {
      const matchAnimals = animals.filter((animal) =>
        value !== "" ? animal.name.includes(value) : false
      );
      console.log("match animals", matchAnimals);
      matchAnimals.forEach((animal) => {
        const animalDiv = createAnimal(animal);
        searchResult.appendChild(animalDiv);
      });
    }
  };

  const input = document.querySelector("input");
  const debouncedOnInput = debounce(onInput);
  input.addEventListener("input", debouncedOnInput);
};
