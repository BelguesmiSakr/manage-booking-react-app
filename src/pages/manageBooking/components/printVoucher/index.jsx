import React from "react";
import { Line } from "../../../../components/line";
import { Button } from "../../../../components/button";

const addServices = [
	"Add Sightseeing Tours",
	"Add Car Rental",
	"Add Hotel Transportation",
];

export const PrintVoucher = () => {
	return (
		<>
			<div className='section-title'>View/Print Vouchers</div>
			<div className='print-voucher-notice'>
				<p className='notice'>
					<strong>
						You are now able to print your vouchers, all services
						are confirmed and the booking is paid in full.
					</strong>
					<br />
					<br /> We strongly recommend that you{" "}
					<strong>
						do not print your vouchers until within 7 days of
						travel.
					</strong>{" "}
					We recommend this because that way you will have the most
					up-to-date itinerary in case there have been any schedule
					changes to your flights or other components. Your printed
					vouchers are proof of payment.
				</p>
				<Button
					content={"Print All Vouchers"}
					styleClass={"golden-button"}
				/>
			</div>
			<Line styleClass={"doted-black-line"} />
			<div className='add-services-container'>
				{addServices.map((service, i) => (
					<div className='service-container'>
						<Button
							content={service}
							styleClass={"golden-button"}
							key={i}
						/>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='#608CDD'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='white'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
							/>
						</svg>
					</div>
				))}
			</div>
			<div className='chat-with-us-section'>
				<span>
					<em className='chat-text-label-one'>Chat with Us now</em>
					<br />
					<em className='chat-text-label-two'>
						7 days a week from 8 AM to Midnight ET
					</em>
				</span>
				<div className='chat-image'></div>
			</div>
			<Line styleClass={"blue-line"} />
		</>
	);
};
