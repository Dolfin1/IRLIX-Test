
const form = document.querySelector(".js-form");
const notepadOutput = document.querySelector(".notepad__output");
const data = [];

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const number = this.elements["number"].value;
	if(number === ""){
      alert("Заполните номер записи, пожалуйста")
      return}
	const content = this.elements["content"].value;
   if(content === ""){
      alert("Заполните название записи, пожалуйста")
      return}
	data.push({ number, content });
  	data.sort((a, b) => a.number - b.number);
 	dataCreator();
  	this.reset();
});

function dataCreator() {
	const list = data.map((note) => {
	return `<div>${note.number}) ${note.content}</div>`;
	});
	notepadOutput.innerHTML = list.join("");
}