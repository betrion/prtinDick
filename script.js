let imeSelect = document.getElementById("ime");
let prezimeSelect = document.getElementById("prezime");
let rezultat = document.getElementById("result");
let brisiBotun = document
  .querySelector("#delete")
  .addEventListener("click", () => {
    event.preventDefault();
    let divovi = document.querySelectorAll("#fy");
    console.log(divovi);
    divovi.forEach((div) => div.remove());
  });
let botun = document.querySelector("#send").addEventListener("click", () => {
  event.preventDefault();
  rezultat.innerHTML += `<div id="fy">Fuck you ${imeSelect.value} ${prezimeSelect.value}</div>`;
});
