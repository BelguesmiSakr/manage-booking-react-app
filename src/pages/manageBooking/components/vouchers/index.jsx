import React, { useState } from "react";
import { Line } from "../../../../components/line";

export const Vouchers = () => {
	const [showMoreLess, setshowMoreLess] = useState(false);
	return (
		<>
			<div className='vouchers-container'>
				<div className='flex-space-between'>
					<div className='section-title'>View/Print Vouchers</div>
					{showMoreLess ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='white'
							viewBox='0 0 24 24'
							strokeWidth={2.5}
							stroke='#666666'
							className='arrow-down'
							onClick={() => setshowMoreLess(false)}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4.5 15.75l7.5-7.5 7.5 7.5'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='white'
							viewBox='0 0 24 24'
							strokeWidth={2.5}
							stroke='#666666'
							className='arrow-down'
							onClick={() => setshowMoreLess(true)}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 8.25l-7.5 7.5-7.5-7.5'
							/>
						</svg>
					)}
				</div>
				<p>
					<strong>
						In order to be able to print your voucher, all services
						must be confirmed and the booking must be paid in full.
					</strong>
					<br />
					<br />
					We strongly recommend that you&nbsp;
					<strong>
						do not print your vouchers until within 7 days of
						travel.
					</strong>{" "}
					We recommend this because that way you will have the most
					up-to-date itinerary in case there have been any schedule
					changes to your flights or other components. <br />
					<br />
					<strong>
						Your printed vouchers are proof of payment.
					</strong>{" "}
					Remember, each service may require a different type of
					voucher whether it be electronic or paper. Vouchers are in
					the name of TripMasters who has paid all services to hotels
					transportation, and sightseeing suppliers.&nbsp;
					{showMoreLess ? null : (
						<span onClick={() => setshowMoreLess(true)}>
							...more
						</span>
					)}
				</p>
				{showMoreLess ? (
					<p>
						<br />
						At this time, it is important you make sure you have a
						voucher for each service purchased. We recommend you
						sort them and match them to the Itinerary page to make
						sure nothing has been missed.
						<br />
						<br />
						<strong>PAY ATTENTION TO:</strong> <br />
						<br />
						<strong>1. TRAINS:</strong>
						<br />
						You may have received some tickets by FedEx or by email.
						It's important you have the original paper documents if
						mailed to your home address. The tickets are
						non-refundable and non-replaceable and are considered
						legal tender.
						<br />
						<br />
						<strong>2. GREEK FERRIES:</strong>
						<br />
						Remember to check at the front desk locally for your
						hydrofoil tickets if traveling in Greece. These are
						paper documents MUST be presented at the port. They will
						be delivered directly to the hotel where you are staying
						prior to your travel by ferry to the next destination.
						<br />
						<br />
						<strong>3. SCHEDULE CHANGES</strong>
						<br />
						While schedule changes do not happen often, airlines
						always reserve the right to adjust schedules or cancel
						flights as they see fit. <br />
						<br />
						We will make every attempt to contact you via email in
						case of a schedule change up to 48 hours prior to your
						scheduled outbound flight. <br />
						<br />
						Important reminder for travelers to check with the
						airlines directly for changes, delays or cancellations
						within 48 hours of departure as these changes can be
						considered last minute. The result may incur missed
						services like hotel nights or transfers. Contacting the
						airline is usually the quickest way to get a new flight
						scheduled. If you are having problems with the airline
						representative please contact us for support. Also, if a
						last-minute change is made during travel please be sure
						to let us know so we can advise the services that may be
						affected due to later arrival times.
						{showMoreLess ? (
							<span onClick={() => setshowMoreLess(false)}>
								...less
							</span>
						) : null}
					</p>
				) : null}
			</div>
			<Line styleClass={"blue-line"} />
		</>
	);
};
