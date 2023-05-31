//il faut
//creer 3 colonnes
//pouvoir creer une div avec du contenu
// la drag & drop dans une des 3 colonnes

let dragged;
//on crée la structure en 3 colonnes
createFullElement("div", "#app", {
   id: "column-01",
   className: "container-column",
   textContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.",
});
createFullElement("div", "#app", {
   id: "column-02",
   className: "container-column",
   textContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.",
});
createFullElement("div", "#app", {
   id: "column-03",
   className: "container-column",
   textContent:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, nostrum.",
});
//on crée un élément dragable

// createFullElement("p", "#column-01", {
//    textContent: "drag me !",
//    id: "to-drag",
// });
const source = document.createElement("p");
source.textContent = "Drag me !";
source.id = "to-drag";
console.log(source);
const firstColumn = document.querySelector("#column-01");
firstColumn.appendChild(source);
const draggable = document.querySelector("#to-drag");
draggable.addEventListener("drag", (event) => {
   event.target.add.classList("test");
   console.log("dragging");
});
draggable.addEventListener("dragstart", (event) => {
   dragged = event.target;
   event.target.classList.add("dragging");
});

//*************************************************** */
function createFullElement(tagName, source, properties) {
   const element = document.createElement(tagName);
   sourceElement = document.querySelector(source);
   sourceElement.appendChild(element);

   for (const property in properties) {
      element[property] = properties[property];
   }

   return element;
}
