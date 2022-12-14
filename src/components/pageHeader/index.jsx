import React from "react";

export const PageHeader = () => {
	return (
		<section className='header'>
			<div className='header__container'>
				<div className='header__cell'>
					<div className='header__logo'>
						<div className='header__logo-img'>
							<a
								href='https://www.tripmasters.com/'
								target='_blank'
							>
								<img
									src='https://www.tripmasters.com/general/tripmasters/DefaultImages/HD_Logo.jpg'
									alt='logo image'
								/>
							</a>
						</div>
						<a
							className='header__logo-text fontSize12 font-weight-bold'
							href='https://www.tripmasters.com/'
							target='_blank'
						>
							An <span className='header__logo-span'>A+</span>{" "}
							company rated by BBB
						</a>
					</div>

					<div className='header__chatUs mr-5' id='dvChat'>
						<div id='scEUCT'>
							<a
								className='fontSize12 font-weight-bold'
								href='https://www.tripmasters.com/chat.aspx'
								target='_blank'
							>
								<span className='chatUs'>Chat with us!</span>
							</a>
						</div>
					</div>

					<div className='header__info'>
						<div className='header__info-text'>
							Call US 7 Days a week <br /> from 8AM to Midnight ET
						</div>
						<span className='header__info-number'>
							1-800-430-0484
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
