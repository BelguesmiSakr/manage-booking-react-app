import React from "react";
import { Line } from "../../../../components/line";
import { Button } from "../../../../components/button";

const bookingData = {
	bookingNum: "846916",
	numOfRooms: 1,
	numOfAdults: 2,
	numOfChildren: 0,
	departureDate: "3/8/2022",
	returnDate: "3/8/2022",
	totalAmount: "$ 3,805.61",
	passangers: {
		room1: [
			{
				name: "SZEWAN LETTICIA JOHNSON KIM",
				categorie: "Adult",
			},
			{ name: "FAI JOHNSONMON", categorie: "Adult" },
		],
	},
};

const addServices = [
	"Add Sightseeing Tours",
	"Add Car Rental",
	"Add Hotel Transportation",
];

export const BookingDetails = ({ data = bookingData }) => {
	return (
		<div>
			<div className='section-title'>Booking Details</div>
			<Line styleClass={"doted-black-line"} />
			<div className='booking-details-record'>
				<div className='detail-cell'>
					<span className='detail-label'>Booking #</span>
					<span className='detail-value-num'>{data.bookingNum}</span>
				</div>
				<Line styleClass={"orange-vertical-line"} />
				<div className='detail-cell'>
					<span className='detail-label'>Rooms</span>
					<span className='detail-value'>{data.numOfRooms}</span>
				</div>
				<Line styleClass={"orange-vertical-line"} />
				<div className='detail-cell'>
					<span className='detail-label'>Adults</span>
					<span className='detail-value'>{data.numOfAdults}</span>
				</div>
				<Line styleClass={"orange-vertical-line"} />
				<div className='detail-cell'>
					<span className='detail-label'>Children</span>
					<span className='detail-value'>{data.numOfChildren}</span>
				</div>
				<Line styleClass={"orange-vertical-line"} />
				<div className='detail-cell'>
					<span className='detail-label'>Departure Date</span>
					<span className='detail-value'>{data.departureDate}</span>
				</div>
				<Line styleClass={"orange-vertical-line"} />
				<div className='detail-cell'>
					<span className='detail-label'>Return Date</span>
					<span className='detail-value'>{data.returnDate}</span>
				</div>
				<Line styleClass={"orange-vertical-line"} />
				<div className='detail-cell'>
					<span className='detail-label'>Total Amount</span>
					<span className='detail-value'>{data.totalAmount}</span>
				</div>
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
			<Line styleClass={"doted-black-line"} />
			<div className='passangersDetails'>
				<div className='passangersLabel'>Passenger/s Traveling</div>
				<div className='rooms-details'>
					<span className='room-label'>Room 1</span>
					{data.passangers.room1.map((passanger, i) => {
						return (
							<div key={i} className={"passangers-list-name"}>
								<div className='passanger-name'>
									{passanger.name}
								</div>
								<div className='passanger-categorie'>
									{passanger.categorie}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Line styleClass={"blue-line"} />
		</div>
	);
};
