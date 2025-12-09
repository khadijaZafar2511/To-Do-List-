let writebutton = document.querySelector("#text");
let main2 = document.querySelector("#main2");

let arr = [];
writebutton.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    let input = document.querySelector("#input");
    let div = document.createElement("div");
    div.classList.add("list1");
    div.innerHTML = `<button class="list" id="button1">${input.value}</button>
            <button class="circle">x</button>`;

    arr.push(div);
    console.log(arr);

    main2.appendChild(div);
    localStorage.setItem("main2",main2.innerHTML);

    writebutton.innerHTML = `<input id="input" placeholder="Write here.......">`;
    let circles = document.querySelectorAll(".circle");
      circles.forEach((circle) => {
        circle.addEventListener("click", function () {
          let b = arr.indexOf(this.parentElement);
        

          // console.log(b);
          arr.splice(b, 1);
          this.parentElement.remove();
    
        });
      });
    
   
    }
});
window.addEventListener("load", () => { 
  let savedData = localStorage.getItem("main2");
  if (savedData) {
    main2.innerHTML = savedData;
   
  
  }
 })     

