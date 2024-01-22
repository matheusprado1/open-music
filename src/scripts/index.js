import { applyCurrentFilter } from "./filter.js";
import { toggleThemeForElements } from "./theme.js";
import { darkMode } from "./theme.js";

const app = document.querySelector("#app");

document.querySelector('.category__item[data-id="0"]').classList.add("button--selected");

export const renderAlbuns = (array = []) => {

  app.innerHTML = "";

  array.forEach(item => {
    app.insertAdjacentHTML("afterbegin",
      `
    <div class="found__album">
      <div class="album__container">
        <img src=${item.img} class="album__image"></img>
        <div class="content__container">
        <div class="tags__container">
          <span class="album__tag">${item.band}</span>
          <span class="album__tag">${item.year}</span>
        </div>
        <p class="album__title">${item.title}</p>
        <div class="purchase__container">
          <span class="album__price">R$ ${item.price.toFixed(2)}</span>
          <button class="purchase__button" data-id=${item.id}>Comprar</button>
        </div>
        </div>
      </div>
    </div>
    `,
    )
  })
  if (darkMode) {
    toggleThemeForElements([
      ".content__container",
      ".album__tag",
      ".album__title",
      ".album__price",
      ".purchase__button",
      ".found__album",
    ])
  }
}


