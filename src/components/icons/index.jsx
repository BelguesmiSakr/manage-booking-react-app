import React from "react";

// List of icons name used to indicate the wanted icon while using Icon component
const iconsPathes = {
	checkCercle:
		"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z",
	leftArrow:
		"M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
	creditCard:
		"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z",
};



export const Icon = ({
	name,
	fill = "none",
	storkColor = "currentColor",
	storkWidth = 1.5,
	className,
}) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill={fill}
			viewBox='0 0 24 24'
			strokeWidth={storkWidth}
			stroke={storkColor}
			className={className}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d={iconsPathes[name]}
			/>
		</svg>
	);
};
