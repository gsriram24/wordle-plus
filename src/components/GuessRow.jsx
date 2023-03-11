import React from "react";
import { useSearchParams } from "react-router-dom";
import { getCharacterCount } from "../utils/utils";

function GuessRow({ guess, selectedWord, isCurrentGuess }) {
	const [searchParams] = useSearchParams();
	const size = Number(searchParams.get("size"));
	const getGuessLetterColor = (letter, i) => {
		let className = "text-white ";
		if (!letter || isCurrentGuess) return "bg-transparent";
		if (
			selectedWord?.includes(letter) &&
			getCharacterCount(guess.substring(0, i), letter) <
				getCharacterCount(selectedWord, letter)
		) {
			if (guess[i] === selectedWord[i]) {
				return className + "bg-emerald-600";
			}
			return className + "bg-yellow-600";
		}
		return className + "bg-stone-600";
	};

	const getSize = () => {
		if (size > 12) {
			return "w-10 h-10";
		}
		if (size > 8) {
			return "w-12 h-12";
		}
		return "w-16 h-16";
	};

	const getGuessBody = () => {
		const row = [];
		for (let i = 0; i < size; i++) {
			let letter = guess?.[i] ?? "";
			row.push(
				<div
					key={i}
					className={`${getSize()} flex items-center justify-center rounded-sm border-gray-400 border-2 transition-colors ease-in-out delay-150 duration-1000  font-semibold text-3xl ${getGuessLetterColor(
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
