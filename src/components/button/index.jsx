import React from "react";

export const Button = ({ content, styleClass, onClickEvent }) => {
	return (
		<button className={styleClass} onClick={onClickEvent}>
			{content}
		</button>
	);
};
