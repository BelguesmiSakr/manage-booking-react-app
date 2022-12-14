import React from "react";
import { Line } from "../../../../components/line";
import { BlueBox } from "../../../../components/blueBox";
import { Confirmed } from "../../../../components/confirmed";
import { Requested } from "../../../../components/requested";
import { Icon } from "../../../../components/icons";

const itineraryData = {
	NumAdults: 2,
	flights: [
		{ compnay: "Delta Air Lines", ref: "HJEAZ4" },
		{ compnay: "Air Canada", ref: "26L9TN" },
	],
	cities: [
		{
			departCity: "Denver",
			arrivalCity: "Rome",
			departDate: { day: "Monday, September 19, 2022", time: "1:03pm" },
			arrivalDate: {
				day: "Tuesday, September 20, 2022",
				time: "10:25am",
			},
			stops: 1,
			cabin: "Economy",
			baggage: 1,
			compnay: "Delta Air Lines",
		},
		{
			departCity: "Venice",
			arrivalCity: "New York",
			departDate: { day: "Tuesday, September 27, 2022", time: "12:00pm" },
			arrivalDate: { day: "Tuesday, September 27, 2022", time: "7:40pm" },
			stops: 1,
			cabin: "Economy",
			baggage: 1,
			compnay: "Air Canada",
		},
	],
};

export const ItineraryDetails = ({ data = itineraryData }) => {
	return (
		<div style={{ width: "900px" }}>
			<div className='section-title'>Itinerary Details</div>
			<div className='flex-space-between' style={{ width: "900px" }}>
				<BlueBox
					content={
						"INTERNATIONAL FLIGHTS | Monday, September 19, 2022"
					}
				/>
				<Confirmed />
			</div>
			<span className='grey-label flex-column-end'>
				for {data.NumAdults} Adult(s)
			</span>
			<div className='flex-column-start'>
				{data.flights.map((flight, i) => (
					<div className='grey-label'>
						Reference: {flight.compnay} -{" "}
						<strong style={{ color: "black" }}>{flight.ref}</strong>
					</div>
				))}
			</div>
			<div className='flex-start add-fees-label'>
				<Icon name={"creditCard"} storkColor={"#FF6600"} />{" "}
				<strong>Additional airline fees may apply at check-in.</strong>
			</div>
			<div className='grey-label'>
				The airline may charge additional fees for checked baggage or
				other optional services. <br /> * Additional overweight baggage
				fees are charged and vary by airline. Check with your airline
				for weight restrictions
			</div>
			<div className='blue-label cancel-terms'>Cancel terms</div>
			{data.cities.map((ele, i) => (
				<div key={i} className={"flights-cities-tab"}>
					<div className='flex flight-record'>
						<div className='flex-column flight-record-cell'>
							<span className='city-name'>{ele.departCity}</span>
							<span>{ele.departDate.day}</span>
							<span>{ele.departDate.time}</span>
						</div>
						<div className='flex-column flight-record-cell'>
							<span className='city-name'>{ele.arrivalCity}</span>
							<span>{ele.arrivalDate.day}</span>
							<span>{ele.arrivalDate.time}</span>
						</div>
						<div className='flex-column-start flight-record-cell'>
							<span>
								{" "}
								<em>Stop(s):</em> {ele.stops}
							</span>
							<span>
								<em>Canin:</em> {ele.cabin}
							</span>
							<span>
								<em>Baggage:</em> {ele.baggage}
							</span>
						</div>
					</div>
					<div className='flex-space-between flight-company-record'>
						<span>{ele.compnay}</span>
						<span className='blue-label'>Show details</span>
					</div>
					<Line styleClass={"doted-light-line"} />
				</div>
			))}
			<Line styleClass={"blue-line"} />
		</div>
	);
};
