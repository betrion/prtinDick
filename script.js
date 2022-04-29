let imeSelect = document.getElementById("ime");
let prezimeSelect = document.getElementById("prezime");
let rezultat = document.getElementById("result");
let botun = document.querySelector("#send").addEventListener("click", () => {
  event.preventDefault();
  rezultat.innerText = `Fuck you ${imeSelect.value} ${prezimeSelect.value}`;
});
