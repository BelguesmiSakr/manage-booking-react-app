import React from "react";
import { Icon } from "../icons";

export const Confirmed = () => {
	return (
		<div className='confirmed-label flex'>
			<Icon
				name={"checkCercle"}
				fill={"#008000"}
				storkColor={"white"}
				storkWidth={1}
			/>
			<span>Confirmed</span>
		</div>
	);
};
