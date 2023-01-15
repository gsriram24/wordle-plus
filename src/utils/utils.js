export const getCurrentGuess = guesses => {
	const index = guesses.findIndex(guess => guess === null);

	return index;
};
export const getCharacterCount = (guess, character) =>
	guess.split(character).length - 1;
