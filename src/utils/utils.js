export const getCurrentGuess = guesses => {
	const index = guesses.findIndex(guess => guess === null);

	return index;
};
