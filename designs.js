// Select color input
// let colorElement = document.querySelector("#colorPicker");
// let color;

// colorElement.addEventListener('click', function (event) {
//   debugger
//   event.preventDefault();
//   console.log("youclicked");
//   color = colorElement.value;
// });

function changeColor() {
  document.getElementById("testElement").style.color = document.getElementById("colorPicker").value;
  console.log("You Changed the Color");
}

const submitEl = document.querySelector("#submitbutton");
const heightEl = document.querySelector("#inputHeight");
const widthEl = document.querySelector("#inputWidth");
let height;
let width;

submitEl.addEventListener('click', function (event) {
event.preventDefault();
console.log("you clicked the Submit button");
height = heightEl.value;
width = widthEl.value;
});
// Select size input


// When size is submitted by the user, call makeGrid()


