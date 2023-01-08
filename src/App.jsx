import { useEffect, useState } from "react";
import WordsGrid from "./components/WordsGrid";
import { getCurrentGuess } from "./utils/utils";

function App() {
	const [guesses, setGuesses] = useState(new Array(6).fill(null));
	const [currentGuess, setCurrentGuess] = useState("");

	const handleKeyPress = e => {
		if (e.key === "Backspace") {
			setCurrentGuess(prevGuess => prevGuess.slice(0, -1));
			return;
		}
		if (e.key === "Enter") {
			if (currentGuess.length >= 5) {
				setGuesses(prevGuesses => {
					const newGuesses = [...prevGuesses];
					newGuesses[getCurrentGuess(newGuesses)] = currentGuess;
					return newGuesses;
				});
				setCurrentGuess("");
			}
			return;
		}
		const upperCaseKey = e.key.toUpperCase();

		if (currentGuess.length >= 5 || !upperCaseKey.match(/^[A-Z]$/)) {
			return;
		}
		setCurrentGuess(prevState => prevState + e.key.toUpperCase());
	};
	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress);

		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [guesses, currentGuess]);

	return (
		<div className="min-h-screen flex flex-col justify-center">
			<WordsGrid guesses={guesses} currentGuess={currentGuess} />
		</div>
	);
}

export default App;
