import { useEffect, useMemo, useState } from "react";
import WordsGrid from "../components/WordsGrid";
import { getCurrentGuess } from "../utils/utils";
import words from "../assets/words.json";
import { useSnackbar } from "react-simple-snackbar";

function PlayScreen() {
	const [guesses, setGuesses] = useState(new Array(6).fill(null));
	const [currentGuess, setCurrentGuess] = useState("");
	const [openSnackbar] = useSnackbar({
		style: {
			fontWeight: "600",
			textAlign: "center",
		},
	});

	const wordList = useMemo(() => {
		return words["5"];
	}, []);
	const selectedWord = useMemo(
		() => wordList[Math.floor(Math.random() * wordList.length)],
		[]
	);
	console.log(selectedWord);

	const handleGuessSubmit = () => {
		if (currentGuess.length >= 5) {
			if (!wordList.includes(currentGuess)) {
				openSnackbar("Not in wordlist");
				return;
			}
			if (selectedWord === currentGuess) {
				openSnackbar("You won!");
				return;
			}
			setGuesses(prevGuesses => {
				const newGuesses = [...prevGuesses];
				newGuesses[getCurrentGuess(newGuesses)] = currentGuess;
				return newGuesses;
			});
			setCurrentGuess("");
		}
	};

	const handleKeyPress = e => {
		if (e.key === "Backspace") {
			setCurrentGuess(prevGuess => prevGuess.slice(0, -1));
			return;
		}
		if (e.key === "Enter") {
			handleGuessSubmit();

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
			<WordsGrid
				guesses={guesses}
				currentGuess={currentGuess}
				selectedWord={selectedWord}
			/>
		</div>
	);
}

export default PlayScreen;
