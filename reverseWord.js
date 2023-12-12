function reverseWords(sentence) {
    let reversedSentence = ''
    let wordStart = 0;

    for (let i = 0; i <= sentence.length; i++) {
        if (i === sentence.length || sentence[i] === ' ') {
            // Reverse the current word
            for (let j = i - 1; j >= wordStart; j--) {
                reversedSentence += sentence[j];
            }

            // Add space if it's not the last word
            if (i !== sentence.length) {
                reversedSentence += ' ';
            }

            // Move the wordStart index to the next character after the space
            wordStart = i + 1;
        }
    }

    return reversedSentence;
}

// Example usage
const inputSentence = "This is a sunny day";
const reversedResult = reverseWords(inputSentence);
console.log(reversedResult);
