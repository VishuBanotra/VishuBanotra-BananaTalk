let textArea = document.querySelector("#text-area");
let buttonTranslate = document.querySelector("#btn-translate");
let outputBox = document.querySelector(".output-box");

let serverUrl = "https://api.funtranslations.com/translate/minion.json";

function translatedURL(input) {
  return serverUrl + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured",  error);
  alert("Something is wrong with the server");
}

buttonTranslate.addEventListener("click", function () {
  let txtInput = textArea.value;

  fetch(translatedURL(txtInput))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputBox.innerText = translatedText;
    })
    .catch(errorHandler);
})
