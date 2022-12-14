import React from "react";
import { Line } from "../../../../components/line";

const data = [
	{
		title: "Trip Payment Status",
		infos: [
			{ label: "Payment Status", value: "6/9/2022" },
			{ label: "Payment Status", value: "6/8/2022" },
			{ label: "Payment Status", value: "6/7/2022" },
		],
	},
	{
		title: "Insurance",
		infos: [{ label: "Reconsider Insurance", value: "6/5/2022" }],
	},
	{
		title: "Documents/Visas/Travel Restrictions",
		infos: [
			{ label: "What To Expect", value: "6/2/2022" },
			{ label: "Monitor Your Destination", value: "6/1/2022" },
			{ label: "Monitor Your Destination", value: "5/30/2022" },
			{ label: "Monitor Your Destination", value: "5/28/2022" },
			{ label: "Visa And Entry Requirement", value: "5/28/2022" },
		],
	},
	{
		title: "Travel is approaching",
		infos: [
			{ label: "Print And Pack", value: "5/27/2022" },
			{ label: "Print And Pack", value: "5/27/2022" },
			{ label: "Extra Fees", value: "5/26/2022" },
			{ label: "Extra Fees", value: "5/26/2022" },
			{ label: "Checklist", value: "5/24/2022" },
		],
	},
];

export const Correspondence = () => {
	return (
		<div>
			<div className='section-title'>Tripmasters Correspondence</div>
			<Line styleClass={"blue-line"} />
			<div className='white-shadow-box'>
				{data.map((ele, i) => (
					<CorrespondenceInfoTable key={i} data={ele} />
				))}
			</div>
			<Line styleClass={"blue-line"} />
		</div>
	);
};

const CorrespondenceInfoTable = ({ data }) => {
	return (
		<div className='infosTabContainer'>
			<div className='iconTitleTable'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='#FF6600'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='white'
					className='envolopeIcon'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
					/>
				</svg>
				<span className='tableTitle'>{data.title}</span>
			</div>
			<table className='infosTab'>
				<tbody>
					{data.infos.map((record, i) => (
						<tr key={i} className='infoTabRecord'>
							<td className='recordLable'>{record.label}</td>
							<td className='recordValue'>
								{record.value}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='white'
									viewBox='0 0 24 24'
									strokeWidth={3}
									stroke='#666666'
									className='w-2 h-2'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M8.25 4.5l7.5 7.5-7.5 7.5'
									/>
								</svg>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Line styleClass='doted-light-line' />
		</div>
	);
};
