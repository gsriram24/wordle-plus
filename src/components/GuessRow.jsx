import React from "react";

function GuessRow({ guess }) {
	const getGuessBody = () => {
		const row = [];
		for (let i = 0; i < 5; i++) {
			let letter = guess?.[i] ?? "";
			row.push(
				<div
					key={i}
					className="w-16 h-16 flex items-center justify-center rounded-sm border-gray-400 border-2 font-semibold text-3xl"
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
