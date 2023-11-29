/* ========= Typing Animation ======= */
const text = "I am a teacher";
const typingText = document.getElementById("typing");

let index = 0;

function type() {
    typingText.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    }
     setTimeout(type, 200);
}
type();

var typed = new Typed(".typing", {
    string:["WEB Designer", "Teacher"],
    typeSpeed: 100,
    BackSpaced:60,

})
