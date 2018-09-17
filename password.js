const DEFAULT_LENGTH = 14;
const DEFAULT_UPPERCASE = 1;
const DEFAULT_DIGITS = 1;
const DEFAULT_SPECIAL = 1;

const MINIMAL_LENGTH = 8;
const MINIMAL_UPPERCASE = 1;
const MINIMAL_DIGITS = 1;
const MINIMAL_SPECIAL = 1;

const MAXIMUM_LENGTH = 1000;

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const digitsCharacters = '0123456789';
const specialCharacters = '(.,/-&?$#@!*<>)';

generate = function (
    length = DEFAULT_LENGTH, 
    uppercase = DEFAULT_UPPERCASE, 
    digits = DEFAULT_DIGITS, 
    special = DEFAULT_SPECIAL) {

    if (isNaN(parseInt(length))) {
        throw `option length must be integer`;
    }

    if (isNaN(parseInt(uppercase))) {
        throw `option uppercase must be integer`;
    }

    if (isNaN(parseInt(digits))) {
        throw `option digits must be integer`;
    }

    if (isNaN(parseInt(special))) {
        throw `option special must be integer`;
    }

    if (length > MAXIMUM_LENGTH) {
        throw `option digits cannot be greater than ${MAXIMUM_LENGTH}`
    }

    if (uppercase < MINIMAL_UPPERCASE) {
        throw `option uppercase cannot be less than ${MINIMAL_UPPERCASE}`
    }

    if (digits < MINIMAL_DIGITS) {
        throw `option digits cannot be less than ${MINIMAL_DIGITS}`
    }

    if (special < MINIMAL_SPECIAL) {
        throw `option special cannot be less than ${MINIMAL_SPECIAL}`
    }

    if (length < MINIMAL_LENGTH) {
        throw `password length cannot be less than ${MINIMAL_LENGTH}`
    }

    if (uppercase > (length - digits - special)) {
        throw `option uppercase cannot be greater than ${length - digits - special}`
    }

    if (digits > (length - uppercase - special)) {
        throw `option digits cannot be greater than ${length - uppercase - special}`
    }

    if (special > (length - uppercase - digits)) {
        throw `option special cannot be greater than ${length - uppercase - digits}`
    }
    
    return randomSortCharacters(
        getRandomCharacters(alphabet, length - uppercase - digits - special) + 
        getRandomCharacters(alphabet.toUpperCase(), uppercase) + 
        getRandomCharacters(digitsCharacters, digits) + 
        getRandomCharacters(specialCharacters, special)
    );
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomCharacters(characters, count) {
    let result = '';
    const length = characters.length;
    for(let i=0; i < count; i++) {
        result += characters[getRandomInt(length)];
    }

    return result;
}

function randomSortCharacters(characters) {
    let result = '';
    const arr = characters.split('');
    const length = characters.length;
    for(let i=0; i < length; i++) {
        result += arr.splice(getRandomInt(arr.length), 1);
    }

    return result;
}

module.exports = {
    generate: generate
}