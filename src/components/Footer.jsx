import React from "react";
import { HashLink } from 'react-router-hash-link';

function Footer() {
	return (
		<div className="pb-[80px] pt-[80px] text-opacity-[100%] text-white font-syne bg-gray bg-opacity-[100%]">
			<div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] sm:pr-[24px] pr-[24px] md:pr-[32px] pb-[0] sm:pl-[24px] pl-[24px] md:pl-[32px] xl:pr-[40px] xl:pl-[40px]">
				<div className="flex justify-between sm:flex-col flex-col md:flex-row items-center border-b-[1px] pb-[80px] mb-[32px] sm:gap-[20px] gap-[20px] md:gap-0 border-[#4d4d4d] border-opacity-[100%]">
					<img
						src="https://assets.ycodeapp.com/assets/app23945/Images/naMpya2ApRFtgSmr64TIYBokXG356lBkBFzT6mCz.svg"
						className="w-[auto] h-[auto] max-w-[100%]"
					/>
					<div className="flex items-center sm:gap-[0px] gap-[0px] md:gap-0 sm:flex-nowrap flex-nowrap md:flex-nowrap flex-row max-md:flex-col">
						<HashLink
							smooth
							to={`/#start`}
							className="no-underline focus:outline-none sm:mt-[8px] mt-[8px] md:mt-[12px] mr-[12px] sm:mb-[8px] mb-[8px] md:mb-[12px] ml-[12px] text-[14px] opacity-[100%] text-opacity-[75%] text-white font-syne font-semibold"
						>
							Home
						</HashLink>
						<HashLink
							smooth
							to={`/about/#start`}
							className="no-underline focus:outline-none sm:mt-[8px] mt-[8px] md:mt-[12px] mr-[12px] sm:mb-[8px] mb-[8px] md:mb-[12px] ml-[12px] text-[14px] opacity-[100%] text-opacity-[75%] text-white font-syne font-semibold"
						>
							About
						</HashLink>
						{/* <HashLink
							href="/blog"
							className="no-underline focus:outline-none sm:mt-[8px] mt-[8px] md:mt-[12px] mr-[12px] sm:mb-[8px] mb-[8px] md:mb-[12px] ml-[12px] text-[14px] opacity-[100%] text-opacity-[75%] text-white font-syne font-semibold"
						>
							Blog
						</HashLink> */}
						<HashLink
							smooth
							to={`/graphic-design/#start`}
							className="no-underline focus:outline-none sm:mt-[8px] mt-[8px] md:mt-[12px] mr-[12px] sm:mb-[8px] mb-[8px] md:mb-[12px] ml-[12px] text-[14px] opacity-[100%] text-opacity-[75%] text-white font-syne font-semibold"
						>
							Graphic Design
						</HashLink>
						<HashLink
							smooth
							to={`/web-design-and-development/#start`}
							className="no-underline focus:outline-none sm:mt-[8px] mt-[8px] md:mt-[12px] mr-[12px] sm:mb-[8px] mb-[8px] md:mb-[12px] ml-[12px] text-[14px] opacity-[100%] text-opacity-[75%] text-white font-syne font-semibold"
						>
							Web Design/Development
						</HashLink>
						<HashLink
							smooth
							to={`/contact/#start`}
							className="no-underline focus:outline-none sm:mt-[8px] mt-[8px] md:mt-[12px] mr-[12px] mb-[12px] ml-[12px] text-[14px] opacity-[100%] font-syne font-semibold text-yellow text-opacity-[100%]"
						>
							Contact Me
						</HashLink>
					</div>
				</div>
				<span className="text-[12px] block text-center sm:text-center text-opacity-[50%] text-white">
					© 2023 NILTweb. All rights reserved.
				</span>
			</div>
		</div>
	);
}

export default Footer;
