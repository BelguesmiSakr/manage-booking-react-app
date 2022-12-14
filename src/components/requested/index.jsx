import React from "react";
import { Icon } from "../icons";
export const Requested = () => {
	return (
		<div className='requested-label flex'>
			<Icon
				name={"leftArrow"}
				fill={"#FF6600"}
				storkColor={"white"}
				storkWidth={2}
			/>
			<span>Requested</span>
		</div>
	);
};
