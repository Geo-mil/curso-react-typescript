/* eslint-disable @typescript-eslint/no-unused-vars */
// Enums
enum Language {
    English,
    Spanish,
    Russian
}
// const myLanguage = Language.Spanish;
// const learningLanguage = Language['English'];
// const otherLanguage: Language = 2;
// otherLanguage === Language.Russian; // true

enum Language {
    Greek = 10
}

enum Colors {
    Red = '#CC0010',
    Green = '#00BE54',
    Blue = '#1060AF'
}
// const myTextColor = Colors.Red;
// console.log(myTextColor); // #CC0010

const enum Hobbies {
    Netflix,
    HBO,
    PrimeVideo,
    DisneyPlus
}

// const onSaturday = Hobbies.HBO;

export { Language, Colors, Hobbies };
