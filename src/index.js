import "./style.sass";
import { header } from "./modules/header";
import { homePage } from "./modules/home";
import { menuPage } from "./modules/menu";
import { contactPage } from "./modules/contact";

// initialize the page
const initializePage = (() => {
  document.getElementById("content").appendChild(header());
  document.getElementById("content").appendChild(homePage());
})();

const renderPage = (content) => {
  const page = document.getElementById("content");
  page.removeChild(page.childNodes[1]);
  page.appendChild(content);
};

// enable nav functionality
const navActions = (() => {
  const nav = document.getElementsByClassName("nav-item");
  nav[0].addEventListener("click", () => {
    renderPage(homePage());
  });
  nav[1].addEventListener("click", () => {
    renderPage(menuPage());
  });
  nav[2].addEventListener("click", () => {
    renderPage(contactPage());
  });
})();
