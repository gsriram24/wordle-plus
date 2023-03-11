import React from "react";

const letterList = ["qwertyuiop", "asdfghjkl", "zxcvbnm"].map(row =>
	row.toUpperCase().split("")
);
letterList[2][0] = "Backspace";
letterList[2][letterList[2].length - 1] = "Enter";

const QwertyKeyboard = ({ handleKeyPress }) => {
	console.log(letterList);
	return (
		<div className="flex flex-col justify-center align-middle sticky bottom-0 bg-white">
			{letterList.map((row, index) => (
				<div key={index} className="justify-center flex">
					{row.map(letter => (
						<button
							key={letter}
							onClick={() => handleKeyPress({ key: letter })}
							className="p-2 text-xl font-semibold"
						>
							{letter}
						</button>
					))}
				</div>
			))}
		</div>
	);
};

export default QwertyKeyboard;
