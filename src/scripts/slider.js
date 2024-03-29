import { applyCurrentFilter } from "./filter.js";

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector("#slider");
  const sliderPrice = document.querySelector("#sliderPrice");

  sliderPrice.innerHTML = `Até R$ ${slider.value}`;
  let initialPercentage = (slider.value / slider.max) * 100;
  slider.style.background = `linear-gradient(90deg, var(--color-brand-1) ${initialPercentage}%, #d3d3d3 ${initialPercentage}%)`;

  slider.oninput = function () {
    sliderPrice.innerHTML = `Até R$ ${this.value}`;
    applyCurrentFilter();

    let percentage = (this.value / this.max) * 100;

    this.style.background = `linear-gradient(90deg, var(--color-brand-1) ${percentage}%, #d3d3d3 ${percentage}%)`;
  }
});
