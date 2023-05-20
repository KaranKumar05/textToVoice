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
let seletedVoiceStyle = "Male";
toolBtn2 = document.querySelectorAll(".change2");
toolBtn2.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".active2").classList.remove("active2");
    btn.classList.add("active2");
  });
});