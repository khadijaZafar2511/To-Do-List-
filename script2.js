 let input = document.querySelector("#input");
let main2 = document.querySelector("#main2");
let writebutton = document.querySelector("#text");
let todos = JSON.parse(localStorage.getItem("arr")) || [];
rendertodo(todos);
writebutton.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    writebutton.innerHTML = `<input  id="input" placeholder="Write here......."></input>`;
    let value = e.target.value;
    todos.push(value);
    console.log(value);
    rendertodo(todos);
    savetodo();
   
  }
});
function rendertodo(todos) {
  main2.innerHTML = "";
  todos.forEach((todo) => {
    if (todo == "") return;
    

    div = document.createElement("div");
    div.classList.add("list1");
    div.innerHTML = `<button class="list" id="button1">${todo}</button>
          <button class="circle" id=${todo}>x</button>`;
    main2.appendChild(div);
    todo = "";
  });
  delete2();
}

function savetodo() {
  localStorage.setItem("arr", JSON.stringify(todos));
}
function delete2() {
  let circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    circle.addEventListener("click", function () {
      console.log(this.parentElement);
      let b = todos.indexOf(this.id);
      console.log(b);
      todos.splice(b, 1);
      this.parentElement.remove();
       savetodo();
      
    });
  });
  
}
