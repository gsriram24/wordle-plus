import React from "react";

const letterList = ["qwertyuiop", "asdfghjkl", "zxcvbnm"].map(row =>
	row.toUpperCase().split("")
);
letterList[2][0] = "Backspace";
letterList[2][letterList[2].length - 1] = "Enter";

const getKey = letter => {
	if (letter === "Backspace")
		return (
			<svg
				width={36}
				height={36}
				viewBox="0 0 1024 1024"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M597.333333 451.669333l55.168-55.168a42.666667 42.666667 0 0 1 60.330667 60.330667L657.664 512l55.168 55.168a42.666667 42.666667 0 0 1-60.330667 60.330667L597.333333 572.330667l-55.168 55.168a42.666667 42.666667 0 0 1-60.330666-60.330667L537.002667 512l-55.168-55.168a42.666667 42.666667 0 0 1 60.330666-60.330667L597.333333 451.669333zM874.581333 832H376.32c-47.402667 0-106.730667-25.941333-138.752-60.672l-163.178667-176.938667c-42.325333-45.866667-42.346667-118.869333 0-164.778666l163.2-176.938667C269.525333 218.026667 329.045333 192 376.32 192h498.24A106.666667 106.666667 0 0 1 981.333333 298.837333v426.325334A106.752 106.752 0 0 1 874.581333 832z m0-85.333333C886.4 746.666667 896 737.088 896 725.162667V298.837333c0-11.946667-9.514667-21.504-21.418667-21.504H376.32c-23.466667 0-60.224 16.064-76.010667 33.194667l-163.2 176.917333c-12.181333 13.226667-12.16 35.882667 0 49.109334l163.2 176.917333C316.16 730.666667 352.746667 746.666667 376.32 746.666667h498.24z"
					fill=""
				/>
			</svg>
		);
	return letter;
};

const QwertyKeyboard = ({ handleKeyPress }) => {
	return (
		<div className="flex flex-col w-full justify-center sticky bottom-0 bg-white gap-2 m-8 max-w-xl mx-auto px-4">
			{letterList.map((row, index) => (
				<div
					key={index}
					className="justify-center flex gap-2 touch-manipulation"
				>
					{row.map(letter => (
						<button
							key={letter}
							onClick={() => handleKeyPress({ key: letter })}
							className={`text-xl font-semibold bg-gray-300 flex ${
								letter === "Enter" || letter === "Backspace"
									? "flex-auto"
									: "flex-1"
							}  rounded-sm justify-center items-center	 h-12`}
						>
							{getKey(letter)}
						</button>
					))}
				</div>
			))}
		</div>
	);
};

export default QwertyKeyboard;
