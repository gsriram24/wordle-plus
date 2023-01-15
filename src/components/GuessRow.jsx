import React from "react";
import { getCharacterCount } from "../utils/utils";

function GuessRow({ guess, selectedWord, isCurrentGuess }) {
	const getGuessLetterColor = (letter, i) => {
		let className = "text-white ";
		if (!letter || isCurrentGuess) return "bg-transparent";
		if (
			selectedWord?.includes(letter) &&
			getCharacterCount(guess.substring(0, i), letter) <
				getCharacterCount(selectedWord, letter)
		) {
			if (guess?.indexOf(letter) === selectedWord?.indexOf(letter)) {
				return className + "bg-emerald-600";
			}
			return className + "bg-yellow-600";
		}
		return className + "bg-stone-600";
	};

	const getGuessBody = () => {
		const row = [];
		for (let i = 0; i < 5; i++) {
			let letter = guess?.[i] ?? "";
			row.push(
				<div
					key={i}
					className={`w-16 h-16 flex items-center justify-center rounded-sm border-gray-400 border-2 transition-colors ease-in-out delay-150 duration-1000  font-semibold text-3xl ${getGuessLetterColor(
						letter,
						i
					)}`}
				>
					{letter}
				</div>
			);
		}
		return row;
	};
	return <div className="flex flex-row gap-1 w-min">{getGuessBody()}</div>;
}

export default GuessRow;
