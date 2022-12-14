import React from "react";
import { PageHeader } from "../../components/pageHeader";
import { GradientUnderHeader } from "../../components/gardientUnderHeader";
import { Box } from "../../components/box";
import { Correspondence } from "./components/correspondence";
import { BookingDetails } from "./components/bookingDetails";
import { DocumentationInformation } from "./components/documentationInformation";
import { Vouchers } from "./components/vouchers";
import { PaymentDetails } from "./components/paymentDetails";
import { ItineraryDetails } from "./components/itineraryDetails";
import { PrintVoucher } from "./components/printVoucher";
import { AdditionalInfo } from "./components/additionalInfo";

export const ManageBooking = () => {
	return (
		<div>
			<PageHeader />
			<main className='manage-bouking-main-content'>
				<GradientUnderHeader />
				<Box>
					<Correspondence />
					<BookingDetails />
					<DocumentationInformation />
					<Vouchers />
					<PaymentDetails />
					<ItineraryDetails />
					<PrintVoucher />
					<AdditionalInfo />
				</Box>
			</main>
		</div>
	);
};
