import wordList from "../utils/portugueseWords";

export default function generatePass(){
    let password: string = '';
    let numberOfWords = 12
    let passwordLength = 2025;

    for(let index = 0; index < numberOfWords; index++){
        password += wordList[(Math.floor(Math.random() * passwordLength))] + ' ';
    }

    return password;
}