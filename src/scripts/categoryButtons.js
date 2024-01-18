import { categories } from "./productsData.js";

const filterCategory = document.querySelector("#filterCategory");

export const renderCategoryButtons = () => {

  categories.forEach(item => {
    filterCategory.insertAdjacentHTML("beforeend",
      `<li class="category__item">${item}</li>`
    )
  })
}

