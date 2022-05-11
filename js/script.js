
const form = document.querySelector(".js-form");
const notepadOutput = document.querySelector(".notepad__output");
const numberError = document.querySelector(".input__error--number");
const contentError = document.querySelector(".input__error--content");
const data = [];

form.addEventListener("input", function (event) {
	numberError.innerHTML = "";
	contentError.innerHTML = "";
});

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const number = this.elements["number"];
	const content = this.elements["content"];
	if(!number.value){
		numberError.innerHTML = "Введите число";
		return;
	} else if(!+number.value) {
		numberError.innerHTML = "Это не число";
		return;
	} else {
		numberError.innerHTML = "";
	}
	if(!content.value){
		contentError.innerHTML = "Введите текст";
		return;
	} else {
		contentError.innerHTML = "";
	}
	data.push({ number:number.value, content:content.value });
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