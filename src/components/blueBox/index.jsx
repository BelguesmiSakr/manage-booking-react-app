import React from "react";

export const BlueBox = ({ content, style }) => {
	return (
		<div className='blue-box-white-text' style={style}>
			{content}
		</div>
	);
};
