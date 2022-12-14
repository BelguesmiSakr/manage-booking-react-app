import React from "react";
import { WhiteShadowBox } from "../../../../components/whiteShadowBox";
import { Line } from "../../../../components/line";
import { Button } from "../../../../components/button";

const paymentData = {
	totalAmount: "$2,681.40",
	balance: "$1,321.08",
	paymentDetails: [
		{
			cardNumber: "1684651645549",
			cardHolder: "Szewan Johnson",
			status: "Processed",
			transactionDate: "5/31/2022 12:54:37 PM",
			amount: "$1,360.32",
		},
		{
			cardNumber: "1684651645549",
			cardHolder: "Szewan Johnson",
			status: "Pending",
			transactionDate: "6/30/2022",
			amount: "$660.54",
		},
		{
			cardNumber: "1684651645549",
			cardHolder: "Szewan Johnson",
			status: "Pending",
			transactionDate: "8/21/2022",
			amount: "$660.54",
		},
	],
};

const addServices = [
	"Add Sightseeing Tours",
	"Add Car Rental",
	"Add Hotel Transportation",
];

export const PaymentDetails = ({ data = paymentData }) => {
	return (
		<>
			<div className='section-title'>Payment Details</div>
			<div className='paymet-amounts'>
				<WhiteShadowBox>
					<strong className='amount-label'>
						Total Purchase:&nbsp;{data.totalAmount}
					</strong>
				</WhiteShadowBox>
				<WhiteShadowBox>
					<strong className='amount-label'>Balance Due:&nbsp;</strong>
					<em className='balance-amount'>{data.balance}</em>
				</WhiteShadowBox>
			</div>
			<table className='payment-details-tab'>
				<thead>
					<tr className='payment-details-record'>
						<td className='amount-label'>Card Number</td>
						<td className='amount-label'>Card Holder Name</td>
						<td className='amount-label'>Status</td>
						<td className='amount-label'>Transaction Date</td>
						<td className='amount-label'>Amount</td>
					</tr>
				</thead>
				<tbody>
					{data.paymentDetails.map((ele, i) => (
						<tr key={i} className='payment-details-record'>
							<td className='payment-details-values'>
								Visa ending in&nbsp;{ele.cardNumber.slice(-4)}
								{ele.status === "Pending" ? (
									<em className='change-card'>
										<br />
										Change Credit Card
									</em>
								) : null}
							</td>
							<td className='payment-details-values'>
								{ele.cardHolder}
							</td>
							<td className='payment-details-values'>
								{ele.status}
							</td>
							<td className='payment-details-values'>
								{ele.transactionDate}
							</td>
							<td className='amount-value'>{ele.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Line styleClass={"blue-line"} />
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
