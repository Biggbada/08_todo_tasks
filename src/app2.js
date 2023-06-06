//il faut
//creer 3 colonnes
//pouvoir creer une div avec du contenu
// la drag & drop dans une des 3 colonnes
// on cree l'input pour générer un item draggable
createFullElement("div", "#app", {
   id: "form-container",
   className: "column-container",
});
createFullElement("h2", "#form-container", {
   textContent: "Create a new task",
});
createFullElement("form", "#form-container", {
   id: "new-task-form",
   name: "new-task-form",
   method: "post",
});
createFullElement("input", "#new-task-form", {
   type: "text",
   name: "new-task-form",
   id: "task-input",
});
const taskInput = document.querySelector("#task-input");
createFullElement("input", "#new-task-form", {
   type: "submit",
   name: "new-task-form",
   id: "submit-button",
});
const submitButton = document.querySelector("#submit-button");
//on crée la structure en 3 colonnes
createFullElement("div", "#app", {
   id: "column-container",
   className: "flex-container",
});
createFullElement("div", "#column-container", {
   id: "column-01",
   className: "container-column",
});
const column01 = document.querySelector("#column-01");
createFullElement("h2", "#column-01", {
   textContent: "To Do",
});
createFullElement("div", "#column-container", {
   id: "column-02",
   className: "container-column",
});
createFullElement("h2", "#column-02", {
   textContent: "In Progress",
});
createFullElement("div", "#column-container", {
   id: "column-03",
   className: "container-column",
});
createFullElement("h2", "#column-03", {
   textContent: "Done !",
});
//on crée un élément dragable
createFullElement("template", "#app", {
   id: "template",
   className: "template",
});
createFullElement("div", "#template", {
   className: "draggable-element",
   draggable: "true",
});
//gestion du drag&drop
console.log(draggable.length);
let draggable = document.querySelectorAll(".draggable-element");
//drag
for (let h = 0; h < draggable.length; h++) {
   console.log(draggable.length);

   draggable[h].addEventListener("drag", (event) => {
      console.log("dragging");
   });
   //dragstart
   draggable[h].addEventListener("dragstart", (event) => {
      draggable[h].classList.add("dragging");
      draggable[h].textContent = taskInput.value;
   });
   //dragend
   draggable[h].addEventListener("dragend", (event) => {
      draggable[h].classList.remove("dragging");
   });
   //droptarget
   const target = document.querySelectorAll(".container-column");
   for (let i = 0; i < target.length; i++) {
      target[i].addEventListener(
         "dragover",
         (event) => {
            event.preventDefault();
         },
         false
      );
      //dragenter
      target[i].addEventListener("dragenter", (event) => {
         target[i].classList.add("targeted");
      });
      //dragleave
      target[i].addEventListener("dragleave", (event) => {
         target[i].classList.remove("targeted");
      });

      //drop
      target[i].addEventListener("drop", (event) => {
         event.preventDefault();
         target[i].appendChild(draggable[h]);
         draggable[h].textContent = taskInput.value;
      });
   }
}
// //submit d'une nouvelle tache
const template = document.querySelector("#template");
console.log(template);
console.log(template.firstChild);
// const clone = template.firstElementChild.cloneNode(true);
// console.log(clone);
submitButton.addEventListener("click", (event) => {
   event.preventDefault();
   const clone = template.firstChild.cloneNode(true);
   console.log(clone);
   clone.textContent = taskInput.value;
   column01.appendChild(clone);
   // for (let i = 0; i < clone.length; i++) {
   //    console.log(taskInput.value);
   //    // column01.appendChild(cardDiv[i]);
   //    // cardDiv[i].id = "card-div" + i;
   //    // cardDiv[i].textContent = taskInput.value;
   //    // console.log(cardDiv);
   // }
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
