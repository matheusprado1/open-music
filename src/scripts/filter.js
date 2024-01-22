import { state } from "./state.js";
import { renderAlbuns } from "./index.js";
import { products } from "./productsData.js";
import { toggleThemeForElements } from "./theme.js";
import { selectors } from "./theme.js";
import { darkMode } from "./theme.js";

const filterButtons = [...document.querySelectorAll(".category__item")];

const [filter, setFilter] = state(products);

const filterByCategoryAndPrice = (array = [], categoryIndex) => {
  const sliderValue = parseInt(slider.value);
  if (categoryIndex === 0) {
    setFilter(array.filter(item => item.price <= sliderValue));
  } else {
    setFilter(array.filter(item => item.category === categoryIndex && item.price <= sliderValue));
  }
}

const filterAll = (array = []) => filterByCategoryAndPrice(array, 0);

const filterPop = (array = []) => filterByCategoryAndPrice(array, 1);

const filterMPB = (array = []) => filterByCategoryAndPrice(array, 2);

const filterForro = (array = []) => filterByCategoryAndPrice(array, 3);

const filterSamba = (array = []) => filterByCategoryAndPrice(array, 4);

const filterBaiao = (array = []) => filterByCategoryAndPrice(array, 5);

const filterRap = (array = []) => filterByCategoryAndPrice(array, 6);

const filterHipHop = (array = []) => filterByCategoryAndPrice(array, 7);

const filterRock = (array = []) => filterByCategoryAndPrice(array, 8);

const filterReggae = (array = []) => filterByCategoryAndPrice(array, 9);

const filterCountry = (array = []) => filterByCategoryAndPrice(array, 10);

const filterGospel = (array = []) => filterByCategoryAndPrice(array, 11);

const filters = {
  "0": () => filterAll(products),
  "1": () => filterPop(products),
  "2": () => filterMPB(products),
  "3": () => filterForro(products),
  "4": () => filterSamba(products),
  "5": () => filterBaiao(products),
  "6": () => filterRap(products),
  "7": () => filterHipHop(products),
  "8": () => filterRock(products),
  "9": () => filterReggae(products),
  "10": () => filterCountry(products),
  "11": () => filterGospel(products)
}

let currentFilter = "0";

export const applyCurrentFilter = () => {
  const filterFunction = filters[currentFilter];
  if (filterFunction) {
    filterFunction();
    if (darkMode) {
      toggleThemeForElements(selectors);
    }
    renderAlbuns(filter());
  }
}

const handleFilter = () => {
  const parentElement = document.querySelector("#filterCategory");

  parentElement.addEventListener("click", (event) => {
    const button = event.target.closest(".category__item");

    if (button) {
      const id = button.getAttribute("data-id");

      filterButtons.forEach(button => {
        button.classList.remove("button--selected");
        if (document.body.classList.contains("dark-mode")) {
          button.classList.add("dark-mode");
        }
      });

      button.classList.add("button--selected");
      button.classList.remove("dark-mode");

      currentFilter = id;
      applyCurrentFilter();
    }
  });
}

handleFilter();
applyCurrentFilter()
handleFilter();
