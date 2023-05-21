let inputText = document.querySelector("textarea");
let btn = document.querySelector("#speak");

btn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(inputText.value);
  speechSynthesis.speak(utterance);
});

let seletedlan = "English";
toolBtn = document.querySelectorAll(".change");
toolBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");
  });
});