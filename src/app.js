//il faut
//creer 3 colonnes
//pouvoir creer une div avec du contenu
// la drag & drop dans une des 3 colonnes
// on cree l'input pour générer un item draggable
createFullElement("div","#app", {
   id: "form-container",
   className: "column-container"
});
createFullElement("h2", "#form-container", {
   textContent: "Create a new task"
})
createFullElement("form", "#form-container", {
   id: "new-task-form",
   name: "new-task-form",
   method: "post"
});
createFullElement("input","#new-task-form", {
   type: 'text',
   name: "new-task-form",   
   id: "task-input"
}) 
createFullElement("input","#new-task-form", {
   type: 'submit',
   name: "new-task-form",   
   id: "submit-button"
}) 
//on crée la structure en 3 colonnes
createFullElement("div", "#app", {
   id: "column-container",
   className: "flex-container",
})
createFullElement("div", "#column-container", {
  id: "column-01",
  className: "container-column",
});
createFullElement('h2',"#column-01", {
   textContent: "To Do"
});
createFullElement("div", "#column-container", {
  id: "column-02",
  className: "container-column",
});
createFullElement('h2',"#column-02", {
   textContent: "In Progress"
});
createFullElement("div", "#column-container", {
  id: "column-03",
  className: "container-column",
});
createFullElement('h2',"#column-03", {
   textContent: "Done !"
});
//on crée un élément dragable
createFullElement("template", "#column-01", {
   id: "template"
})
createFullElement("div", "#template", {
  textContent: "drag me !",
  id: "to-drag",
  className: "draggable-element",
  draggable: "true",
});
//drag
const draggable = document.querySelector("#to-drag");
console.log(draggable);
draggable.addEventListener("drag", (event) => {
  console.log("dragging");
});
//dragstart
draggable.addEventListener("dragstart", (event) => {
  draggable.classList.add("dragging");
  draggable.textContent = ('dragging in progress');
});
//dragend
draggable.addEventListener("dragend", (event) => {
  draggable.classList.remove("dragging");
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
target[i].addEventListener('dragenter', (event) => {
   target[i].classList.add('targeted');
});
//dragleave
target[i].addEventListener('dragleave', (event) => {
   target[i].classList.remove('targeted');
   draggable.textContent = ('dragged');
});

//drop
target[i].addEventListener('drop', (event) => {
   event.preventDefault();
   target[i].appendChild(draggable);
});
};
// creation d'un element draggable
const submitButton = document.querySelector('#submit-button');
const taskInput = document.querySelector('#task-input');
const templateCard = document.querySelector('#template');
console.log(taskInput);
submitButton.addEventListener('click', (event) => {
   event.preventDefault();
   console.log(taskInput.value);
   let dupplicateTemplate = templateCard.cloneNode(true);
   const column01 = document.querySelector('#column-01');
   column01.appendChild.dupplicateTemplate;
   dupplicateTemplate.textContent = taskInput.value;
   

   
})
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
