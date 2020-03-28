// Select color input
// let colorElement = document.querySelector("#colorPicker");
// let color;

// colorElement.addEventListener('click', function (event) {
//   debugger
//   event.preventDefault();
//   console.log("youclicked");
//   color = colorElement.value;
// });

// function changeColor() {
//   document.getElementById("pixelCanvas").style.backgroundColor = document.getElementById("colorPicker").value;
//   console.log("You Changed the Color");
// }

const submitEl = document.querySelector("#submitbutton");
const tableEl = document.querySelector("#pixelCanvas");

tableEl.addEventListener('click', function (event) {
console.log("clicked");
event.target.style.backgroundColor = document.getElementById("colorPicker").value;
});



let height;
let width;

submitEl.addEventListener('click', function (event) {
  tableEl.innerHTML = '';
  const heightEl = document.querySelector("#inputHeight");
  const widthEl = document.querySelector("#inputWidth");
  event.preventDefault();
  console.log("you clicked the Submit button");
  height = heightEl.value;
  width = widthEl.value;

  for (var y = 0; y < height; y++) {
    const tr = document.createElement('tr');
    tableEl.appendChild(tr);
    for (var x = 0; x < width; x++) {
      console.log(y, x);
      const td = document.createElement('td');
      tr.appendChild(td);
    }
  }
});
// Select size input


// When size is submitted by the user, call makeGrid()


// <!--
// <table id="demo" onclick="changeColor()>
// <tr>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td></td>
// </tr>
// </table>
// -->

{/* <h2 id="testElement" onclick="changeColor()">test</h2> */}