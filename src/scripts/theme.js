import { renderCategoryButtons } from "./categoryButtons.js";

const body = document.body;
const icon = document.querySelector("#theme");
const theme = "dark-mode";

export let darkMode = JSON.parse(localStorage.getItem(theme));

export const selectors = [
  ".header__title",
  ".header__theme",
  ".category__title",
  ".category__item",
  ".set-price__title",
  ".set-price__to",
  ".found__title",
  ".button--selected",
  ".content__container",
  ".album__tag",
  ".album__title",
  ".album__price",
  ".purchase__button",
  ".found__album",
];



const themeChangeIcon = icon => {
  if (darkMode) {
    icon.classList.remove("fa-moon");
    icon.classList.add("far", "fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("far", "fa-moon");
  }
}

export const toggleThemeForElements = selectors => {
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (darkMode) {
        element.classList.add(theme);
      } else {
        element.classList.remove(theme);
      }
    })
  })
}

const themeChange = () => {
  darkMode = !darkMode;
  body.classList.toggle(theme);
  themeChangeIcon(icon);
  toggleThemeForElements(selectors);
  localStorage.setItem(theme, darkMode);
}

icon.addEventListener("click", themeChange);

const themePreferenceAnalysis = () => {
  if (darkMode) {
    body.classList.add(theme);
    toggleThemeForElements(selectors);
  }
  themeChangeIcon(icon);
}

renderCategoryButtons();
themePreferenceAnalysis();
