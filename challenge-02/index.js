console.log("\n===========================");
console.log("SOAL 1");
console.log("===========================");

const changeWord = (text, selectedText, changedText) => {
    return text.replace(selectedText, changedText);
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord(kalimat1, "mencintai", "membenci"));
console.log(changeWord(kalimat2, "bromo", "semeru"));

console.log("\n===========================");
console.log("SOAL 2");
console.log("===========================");

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

console.log("\n===========================");
console.log("SOAL 3");
console.log("===========================");

const checkEmail = (email) => {
    const EMAIL_PATTERN =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) return "Error: Bro where is the parameter?";

    return EMAIL_PATTERN.test(email) ? "VALID" : "INVALID";
};

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata")); // ERROR: karena tidak sesuai dengan email pattern
console.log(checkTypeNumber(checkEmail(3322))); // ERROR: Invalid & return ke check type number berupa error string
console.log(checkEmail()); // ERROR: Bro where is the parameter?

console.log("\n===========================");
console.log("SOAL 4");
console.log("===========================");

const isValidPassword = (givenPassword) => {
    const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (givenPassword === undefined) return "Error: Bro where is the parameter?";
    else if (typeof givenPassword !== "string") return "Error: Invalid data type";
    return PASSWORD_PATTERN.test(givenPassword);
};

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0)); // ERROR: karena bukan string, invalid data type
console.log(isValidPassword()); // ERROR: undefined

console.log("\n===========================");
console.log("SOAL 5");
console.log("===========================");

console.log("\n===========================");
console.log("SOAL 6");
console.log("===========================");

console.log("\n===========================");
console.log("SOAL 7");
console.log("===========================");

console.log("\n===========================");
console.log("SOAL 8");
console.log("===========================");
