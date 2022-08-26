// ========================
// SOAL 1
// ========================
const changeWord = (text, selectedText, changedText) => {
    return text.replace(selectedText, changedText);
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord(kalimat1, "mencintai", "membenci"));
console.log(changeWord(kalimat2, "bromo", "semeru"));

// ========================
// SOAL 2
// ========================
const checkTypeNumber = (givenNumber) => {
    if (!givenNumber) return "Error: Bro where is the parameter?";
    else if (typeof givenNumber !== "number") return "Error: Invalid data type";

    return givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
};

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());

// ========================
// SOAL 3
// ========================

const checkEmail = (email) => {
    const EMAIL_PATTERN =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) return "Error: Bro where is the parameter?";

    return String(email).match(EMAIL_PATTERN) ? "VALID" : "INVALID";
};

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata")); // ERROR: karena tidak sesuai dengan email pattern
console.log(checkTypeNumber(checkEmail(3322))); // ERROR: Invalid & return ke check type number berupa error string
console.log(checkEmail()); // ERROR: Bro where is the parameter?
