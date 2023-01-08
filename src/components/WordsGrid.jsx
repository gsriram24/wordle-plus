import React from "react";
import { getCurrentGuess } from "../utils/utils";
import GuessRow from "./GuessRow";

const WordsGrid = ({ guesses, currentGuess }) => {
	return (
		<div className="flex flex-col justify-center items-center gap-1">
			{guesses.map((guess, i) => (
				<GuessRow
					key={i}
					guess={
						i === getCurrentGuess(guesses) ? currentGuess : guess
					}
				/>
			))}
		</div>
	);
};

export default WordsGrid;
