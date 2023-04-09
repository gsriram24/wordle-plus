import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SizeBox = ({ size, onSelect, sizeSelected }) => {
	return (
		<div className="flex flex-col align-middle">
			<div
				onClick={() => onSelect(size)}
				className={`w-12 h-12 rounded-sm border-gray-400 border-2 transition-colors ease-in-out duration-300 hover:bg-gray-400 cursor-pointer ${
					size <= sizeSelected ? `bg-gray-400` : ""
				}`}
			/>
			<p className="text-center text-sm font-semibold">{size}</p>
		</div>
	);
};

const HomeScreen = () => {
	const [sizeSelected, setSizeSelected] = useState(0);

	const navigate = useNavigate();
	function handleSizeSelect(size) {
		setSizeSelected(size);
	}

	function handlePlayClick() {
		navigate(`/play?size=${sizeSelected}`);
	}

	const sizeBoxes = Array.from({ length: 21 }, (_, i) => i + 2).map(size => (
		<SizeBox
			key={size}
			size={size}
			sizeSelected={sizeSelected}
			onSelect={handleSizeSelect}
		/>
	));

	return (
		<div className="flex flex-col items-center justify-center flex-grow">
			<h3 className="mb-8 text-2xl">Please select a game size:</h3>
			<div className="flex flex-wrap justify-center mb-8 gap-1">
				{sizeBoxes}
			</div>
			<button
				className="px-8 py-2 rounded-sm bg-blue-500 text-white disabled:bg-gray-400 font-semibold text-xl"
				onClick={handlePlayClick}
				disabled={sizeSelected === 0}
			>
				Play
			</button>
		</div>
	);
};

export default HomeScreen;
