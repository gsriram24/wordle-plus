import React from "react";
import { getCurrentGuess } from "../utils/utils";
import GuessRow from "./GuessRow";

const WordsGrid = ({ guesses, currentGuess, selectedWord }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-1">
			{guesses.map((guess, i) => (
				<GuessRow
					selectedWord={selectedWord}
					key={i}
					isCurrentGuess={i === getCurrentGuess(guesses)}
					guess={
						i === getCurrentGuess(guesses) ? currentGuess : guess
					}
				/>
			))}
		</div>
	);
};

export default WordsGrid;
