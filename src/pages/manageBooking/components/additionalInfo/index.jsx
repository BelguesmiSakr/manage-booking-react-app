import React from "react";
import { Button } from "../../../../components/button";
import { Line } from "../../../../components/line";

export const AdditionalInfo = () => {
	return (
		<>
			<div className='section-title'>Additional Information</div>
			<div className='infos-buttons'>
				<Button content={"Travel Tips"} styleClass={"blue-button"} />
				<Button content={"F.A.Q."} styleClass={"blue-button"} />
			</div>
			<Line styleClass={"doted-black-line"} />
		</>
	);
};
