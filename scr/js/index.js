import "../scss/main.scss";
import { createTemplate } from "./components/createTemplate.js";
import gallery from "./components/items.js";

let container = document.createElement("div"),
  row = document.createElement("div"),
  images = createTemplate(gallery);
row.className = "row";
container.className = "container";

row.insertAdjacentHTML("beforeend", images);
container.appendChild(row);

document.body.appendChild(container);
