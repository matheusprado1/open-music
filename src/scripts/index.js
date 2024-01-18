import { products } from "./productsData.js";
const app = document.querySelector("#app");

export const state = initialValue => {

  let value = initialValue;

  const getValue = () => value;

  const setValue = newValue => value = newValue;

  return [getValue, setValue];
}

const [albuns, setAlbuns] = state(products);

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
    `
    )
  })

}
renderAlbuns(albuns());

