import { renderAlbuns, state } from "./index.js";
import { categories } from "./productsData.js";
import { products } from "./productsData.js";

const filterButtons = [...document.querySelectorAll(".category__item")];

const [filter, setFilter] = state(products);

const filterPop = (array = []) => {
  setFilter(array.filter(item => item.category === 1));
}
const filterMPB = (array = []) => {
  setFilter(array.filter(item => item.category === 2));
}
const filterForro = (array = []) => {
  setFilter(array.filter(item => item.category === 3));
}
const filterSamba = (array = []) => {
  setFilter(array.filter(item => item.category === 4));
}
const filterBaiao = (array = []) => {
  setFilter(array.filter(item => item.category === 5));
}
const filterRap = (array = []) => {
  setFilter(array.filter(item => item.category === 6));
}
const filterHipHop = (array = []) => {
  setFilter(array.filter(item => item.category === 7));
}
const filterRock = (array = []) => {
  setFilter(array.filter(item => item.category === 8));
}
const filterReggae = (array = []) => {
  setFilter(array.filter(item => item.category === 9));
}
const filterCountry = (array = []) => {
  setFilter(array.filter(item => item.category === 10));
}
const filterGospel = (array = []) => {
  setFilter(array.filter(item => item.category === 11));
}

let currentFilter = "all";

export const applyCurrentFilter = () => {
  switch (currentFilter) {
    case "all":
      setFilter(products);
      break;
    case "pop":
      filterPop(products);
      break;
    case "mpb":
      filterMPB(products);
      break;
    case "forro":
      filterForro(products);
      break;
    case "samba":
      filterSamba(products);
      break;
    case "baiao":
      filterBaiao(products);
      break;
    case "rap":
      filterRap(products);
      break;
    case "hiphop":
      filterHipHop(products);
      break;
    case "rock":
      filterRock(products);
      break;
    case "reggae":
      filterReggae(products);
      break;
    case "country":
      filterCountry(products);
      break;
    case "gospel":
      filterGospel(products);
      break;
  }
  renderAlbuns(filter());
}

const handleFilter = () => {
  const parentElement = document.querySelector("#filterCategory");

  parentElement.addEventListener("click", (event) => {
    const button = event.target.closest(".category__item");

    if (button) {
      const id = button.getAttribute("data-id");

      filterButtons.forEach(button => {
        button.classList.remove("button--selected");
      });

      button.classList.add("button--selected");

      switch (id) {
        case "0":
          currentFilter = "all";
          break;
        case "1":
          currentFilter = "pop";
          break;
        case "2":
          currentFilter = "mpb";
          break;
        case "3":
          currentFilter = "forro";
          break;
        case "4":
          currentFilter = "samba";
          break;
        case "5":
          currentFilter = "baiao";
          break;
        case "6":
          currentFilter = "rap";
          break;
        case "7":
          currentFilter = "hiphop";
          break;
        case "8":
          currentFilter = "rock";
          break;
        case "9":
          currentFilter = "reggae";
          break;
        case "10":
          currentFilter = "country";
          break;
        case "11":
          currentFilter = "gospel";
          break;
      }

      applyCurrentFilter();
    }
  });
}
handleFilter();
