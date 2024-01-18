import { categories } from "./productsData.js";

const filterCategory = document.querySelector("#filterCategory");

export const renderCategoryButtons = () => {

  categories.forEach((item, index) => {
    filterCategory.insertAdjacentHTML("beforeend",
      `<li class="category__item" data-id=${index}>${item}</li>`
    )
  })
}

