/* eslint-disable no-unused-vars */
import React from "react";
import { HashLink } from 'react-router-hash-link';

function HomePageServices() {
	return (
		<div className="pb-[80px] pt-[80px] w-[100%] bottom-[0px] sm:bottom-[0px] relative">
			<img
				src="https://assets.ycodeapp.com/assets/app23945/Images/EwxYetXGSwNBiq0FxiFiJrWsxDRegyYCDGFYV4wa.svg"
				className="h-[auto] max-w-[100%] w-full object-left-top object-cover absolute top-[0px] min-h-[200px]"
			/>
			<div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] sm:pr-[24px] pr-[24px] md:pr-[32px] pb-[0] sm:pl-[24px] pl-[24px] md:pl-[32px] relative z-[100]">
				<div className="pt-[20px] sm:pt-[60px] pb-[20px] sm:pb-[60px] pl-[20px] sm:pl-[60px] pr-[20px] sm:pr-[60px] rounded-[8px] border-[4px] flex flex-col gap-[50px] sm:gap-[70px] bg-opacity-[100%] bg-white border-gray border-opacity-[100%]">
					<h1 className="text-[36px] sm:text-[48px] font-syne font-bold leading-[1.2] text-gray text-opacity-[100%]">
						My services include the following
					</h1>
					<div className="flex flex-row items-start justify-between gap-[48px] max-md:flex-col">
						<div className="flex flex-col items-start sm:gap-[10px] gap-[10px] md:gap-[24px] w-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-syne font-bold text-[24px] leading-[1.375em] text-gray text-opacity-[100%]">
								Graphic Design
							</h1>
							<p className="font-syne text-[16px] leading-[1.5em] text-gray text-opacity-[100%]">
								I can design/redesign fliers, gospel tracts, brochures, banners,
								business cards, pamphlets, prayer cards, handouts, bulletins,
								logos, websites, and more.
							</p>
							<HashLink smooth to={`/graphic-design/#start`} className="flex gap-[4px] hover:gap-[8px] duration-200">
								<span className="font-syne text-[16px] text-gray text-opacity-[50%]">
									View Pricing
								</span>
								<img
									src="https://assets.ycodeapp.com/assets/app23945/Images/NczFD2GzZV7pUG2iciVKyJvuqgvx6DiFFxZ7ZVRD.svg"
									className="max-w-[100%] w-[24px] h-[24px] opacity-75"
								/>
							</HashLink>
						</div>
						<div className="flex flex-col items-start sm:gap-[10px] gap-[10px] md:gap-[24px] w-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/opNfpkwfSKIAXs5DS8JpzMhJaALOR9VwXsOYFRJs.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-syne font-bold text-[24px] leading-[1.375em] text-gray text-opacity-[100%]">
								Website Design and Development
							</h1>
							<p className="font-syne text-[16px] leading-[1.5em] text-gray text-opacity-[100%]">
								I can design/redesign and develop HashLink custom website for you’re
								ministry. I also offer to host it on my own server, which will
								most likely be cheaper than the one you are currently using.
							</p>
							<HashLink smooth to={`/web-design-and-development/#start`} className="flex gap-[4px] hover:gap-[8px] duration-200">
								<span className="font-syne text-[16px] text-gray text-opacity-[50%]">
									View Pricing
								</span>
								<img
									src="https://assets.ycodeapp.com/assets/app23945/Images/NczFD2GzZV7pUG2iciVKyJvuqgvx6DiFFxZ7ZVRD.svg"
									className="w-[auto] h-[auto] max-w-[100%] opacity-75"
								/>
							</HashLink>
						</div>
						<div className="flex flex-col items-start sm:gap-[10px] gap-[10px] md:gap-[24px] w-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/NbkZq5YgFtF3F4tvVrSw4rwLYCB012svKeTvFiM8.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-syne font-bold text-[24px] leading-[1.375em] text-gray text-opacity-[100%]">
								Website Maintenance
							</h1>
							<p className="font-syne text-[16px] leading-[1.5em] text-gray text-opacity-[100%]">
								I can edit and maintain your website, or any other things you
								may need done on your website.
								<i className="ml-1">Starting at $10/month</i>
							</p>

							{/* <div className="flex gap-[8px]">
								<span className="font-syne text-[16px] text-gray text-opacity-[50%]">
									View Pricing
								</span>
								<img
									src="https://assets.ycodeapp.com/assets/app23945/Images/NczFD2GzZV7pUG2iciVKyJvuqgvx6DiFFxZ7ZVRD.svg"
									className="w-[auto] h-[auto] max-w-[100%] opacity-75"
								/>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePageServices;
