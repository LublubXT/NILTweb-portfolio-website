/* eslint-disable no-unused-vars */
import React from "react";
import { HashLink } from 'react-router-hash-link';

function HomeHeader() {
	return (
		<div className="pt-[0px] pb-[0px] bg-gray bg-opacity-[100%]">
			<div className="mt-[0] mr-[auto] mb-[0] ml-[auto] max-sm:pr-[24px] pr-[24px] max-md:pr-[32px] max-sm:pl-[24px] pl-[24px] max-md:pl-[32px] max-w-[1280px] max-md:pt-[60px] max-sm:pt-[60px] pt-[60px] lg:pt-[60px] max-md:pb-[60px] max-sm:pb-[60px] pb-[60px] lg:pb-[60px]">
				<div className="w-[100%] flex items-center justify-between gap-[75px] flex-row max-sm:flex-col">
					<div className="max-w-[628px] w-[100%]">
						<p className="text-left max-w-[480px] font-syne leading-[1.5em] max-sm:text-[20px] text-[20px] max-md:text-[24px] text-white text-opacity-[100%]">
							Hi! I’m Caleb,
						</p>
						<h1 className="max-md:text-[36px] text-[48px] tracking-[-0.025em] text-left font-syne font-bold w-[100%] max-w-[auto] max-sm:max-w-[628px] object-center leading-[1.2] text-opacity-[100%] text-white mb-[24px]">
							I make Graphic Designs that Connect Churches and Missionaries with
							their Communities
						</h1>
						<p className="text-opacity-[50%] text-left max-w-[480px] font-syne leading-[1.5em] text-[18px] text-white pb-[24px]">
							From websites to gospel tracts, I design/create materials that support your ministry’s mission.
						</p>
						<div className="mt-[20px] flex flex-row max-sm:flex-col items-stretch max-sm:items-center gap-[12px] justify-start">
							<HashLink smooth to={`/contact/#start`}
								className="tracking-[0.025em] w-fit max-md:w-full border-[transparent] border-[1px] border-solid inline-block focus:outline-none text-[14px] rounded-[8px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-yellow bg-opacity-[100%] text-gray text-opacity-[100%]"
							>
								<span className="font-syne">Contact Me</span>
							</HashLink>
							<HashLink smooth to={`/about/#start`}
								className="tracking-[0.025em] w-fit max-md:w-full border-[1px] border-solid inline-block focus:outline-none text-[14px] rounded-[8px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] font-syne text-opacity-[100%] text-white border-white border-opacity-[100%]"
							>
								<span className="">Learn more</span>
							</HashLink>
						</div>
					</div>
					<div className="h-[100%] max-w-[467px]">
						<img
							src="https://assets.ycodeapp.com/assets/app23945/Images/24QoOr993yHanQRYGsVfckbv8MorKYKYXghPEmKH.svg"
							className="w-[auto] h-[auto] max-w-[100%] rounded-[12px] max-md:static max-sm:static static lg:static"
						/>
					</div>
				</div>
				<img
					src="https://assets.ycodeapp.com/assets/app23945/Images/2QPmj9NswJdz7ByLSP1x4U8nyxyBJdFhIXjDc23w.svg"
					className="w-[auto] max-sm:w-[auto] h-[auto] max-w-[100%]"
				/>
			</div>
		</div>
	);
}

export default HomeHeader;
