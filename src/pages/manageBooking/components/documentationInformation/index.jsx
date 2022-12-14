import React, { useState } from "react";
import { Button } from "../../../../components/button";
import { Line } from "../../../../components/line";

export const DocumentationInformation = () => {
	const [attentionVisa, setattentionVisa] = useState(false);
	return (
		<div>
			<div className='section-title'>Documentation Information</div>
			<div className='visa-passport-label'>
				Visa & Passport Requirements
			</div>
			<div className='check-visa-container'>
				<div className='verify-label'>
					Verify Visa Requirements for all people in your party
				</div>
				<Button
					content={"Check your Visas"}
					styleClass={"blue-button"}
					onClickEvent={() =>
						window.open(
							"https://visacentral.com/?login=tripmasters",
							"_blank"
						)
					}
				/>
			</div>
			<Line styleClass={"doted-black-line"} />
			<div className='attention-container'>
				<div className='attention-content'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='#FF6600'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='white'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
						/>
					</svg>
					<div className='attention-label'>
						<span>Attention! </span>Your Passport must be valid for
						6 months after your scheduled Return date.
					</div>
				</div>
				{attentionVisa ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='white'
						viewBox='0 0 24 24'
						strokeWidth={2.5}
						stroke='#666666'
						className='arrow-down'
						onClick={() => setattentionVisa(false)}
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
						onClick={() => setattentionVisa(true)}
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M19.5 8.25l-7.5 7.5-7.5-7.5'
						/>
					</svg>
				)}
			</div>
			{attentionVisa ? (
				<div className='white-shadow-box passport-notation smoothe-transition'>
					<div className='passort-label'>Passports</div>
					<br />
					<span>
						Check your passport and make sure it's valid for at
						least 6 months after the return from your trip!
					</span>
					<p>
						Most travelers know they need a passport to travel
						internationally, but few are aware that, in many
						instances, your passport must be valid longer than your
						stay. In fact, many countries require it to be valid for
						six months beyond your intended return date. If it
						expires before that, you may be denied boarding or entry
						upon arrival at your destination and have to go straight
						home. To be safe, verify that your passport is valid for
						at least six months after your intended return date --
						if the expiration date is uncomfortablly close to the
						cutoff, make sure you renew it way ahead of time.
						Unfortunately, this is something airlines will rarely
						mention, even when you're booking, so "pay special
						attention to these details".
					</p>
					<br />
					<span>
						Make sure your name matches what is listed on your
						airline tickets.
					</span>
					<p>
						When booking a ticket, it is important to use the same
						name that is listed on your passport. The first and last
						name should be identical to your passport, and by adding
						your middle name, it will set you apart, especially if
						you have a common name.
					</p>
				</div>
			) : null}
			<Line styleClass={"blue-line"} />
		</div>
	);
};
