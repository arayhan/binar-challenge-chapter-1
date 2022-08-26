const changeWord = (text, selectedText, changedText) => {
    return text.replace(selectedText, changedText);
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord(kalimat1, "mencintai", "membenci"));
console.log(changeWord(kalimat2, "bromo", "semeru"));
