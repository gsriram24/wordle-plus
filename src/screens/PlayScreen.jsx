import { useEffect, useMemo, useState } from "react";
import WordsGrid from "../components/WordsGrid";
import { getCurrentGuess } from "../utils/utils";
import words from "../assets/words.json";
import { useSnackbar } from "react-simple-snackbar";
import { useSearchParams } from "react-router-dom";

function PlayScreen() {
	const [searchParams] = useSearchParams();
	const size = Number(searchParams.get("size"));
	const [guesses, setGuesses] = useState(new Array(size + 1).fill(null));
	const [currentGuess, setCurrentGuess] = useState("");
	const [openSnackbar] = useSnackbar({
		style: {
			fontWeight: "600",
			textAlign: "center",
		},
	});

	const wordList = useMemo(() => {
		return words[size];
	}, []);
	const selectedWord = useMemo(
		() => wordList[Math.floor(Math.random() * wordList.length)],
		[]
	);
	console.log(selectedWord);

	const handleGuessSubmit = () => {
		if (currentGuess.length >= size) {
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

		if (currentGuess.length >= size || !upperCaseKey.match(/^[A-Z]$/)) {
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
		<div className="min-h-screen flex flex-col justify-center overflow-x-auto">
			<WordsGrid
				guesses={guesses}
				currentGuess={currentGuess}
				selectedWord={selectedWord}
			/>
		</div>
	);
}

export default PlayScreen;
