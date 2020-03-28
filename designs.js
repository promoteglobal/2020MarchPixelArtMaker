const submitEl = document.querySelector("#submitbutton");
const tableEl = document.querySelector("#pixelCanvas");

//gathering color info and applying to grid
tableEl.addEventListener('click', function (event) {
event.target.style.backgroundColor = document.getElementById("colorPicker").value;
});


let height;
let width;
//gathering height and width numbers and creating a grid
submitEl.addEventListener('click', function (event) {
  tableEl.innerHTML = '';
  const heightEl = document.querySelector("#inputHeight");
  const widthEl = document.querySelector("#inputWidth");
  event.preventDefault();
  height = heightEl.value;
  width = widthEl.value;

  for (var y = 0; y < height; y++) {
    const tr = document.createElement('tr');
    tableEl.appendChild(tr);
    for (var x = 0; x < width; x++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
  }
});
