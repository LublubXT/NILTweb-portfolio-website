/* eslint-disable no-unused-vars */
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';
function NavbarLight() {
	const [showNav, setShowNav] = useState(false);
	const [showDropDown, setShowDropDown] = useState(false);

	function showNavBar() {
		setShowNav(!showNav);
	}

	function showDrop() {
		setShowDropDown(!showDropDown);
	}

	return (
		<div id="start" className="relative pt-[32px] pb-[32px] bg-white bg-opacity-[100%]">
			<div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] max-sm:pr-[24px] pr-[24px] max-md:pr-[32px] pb-[0] max-sm:pl-[24px] pl-[24px] max-md:pl-[32px] max-w-[1280px]">
				<div className="flex items-center justify-between">
					<div className="">
						<HashLink smooth to={`/`} className="">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/k3rTDdALQN4NAoz1YPGwXZbQiIgULoNKCF2p1RqJ.svg"
								className="w-[auto] h-[40px]"
							/>
						</HashLink>
					</div>
					<div className={`flex space-x-[32px] items-center max-sm:hidden`}>
						<HashLink
							smooth
							to={`/`}
							className="no-underline focus:outline-none text-[14px] font-syne text-gray"
						>
							Home
						</HashLink>
						<HashLink
							smooth
							to={`/about`}
							className="no-underline focus:outline-none text-[14px] font-syne text-gray"
						>
							About
						</HashLink>
						{/* <HashLink
							href="/blog"
							className="no-underline focus:outline-none text-[14px] font-syne text-gray"
						>
							Blog
						</HashLink> */}
						<div className="relative">
							<div
								id="div-j2x50vpi3"
								className="flex items-center cursor-pointer"
								onClick={showDrop}
							>
								<a className="no-underline focus:outline-none text-[14px] font-syne text-gray">
									Services
								</a>
								<img
									src="https://assets.ycodeapp.com/assets/app23945/Images/g1LGDE94ofjyiqRbuXq0lPCd4NLKB0jIfZmtQeUr.svg"
									id="navbar-drop-arrow"
									className={
										showDropDown == false
											? `w-[auto] h-[auto] max-w-[100%] rotate-0 duration-200`
											: `w-[auto] h-[auto] max-w-[100%] rotate-180 duration-200`
									}
								/>
							</div>
							<div
								id="nav-drop-container"
								className={
									showDropDown == true
										? `absolute pl-[10px] pt-[10px] pr-[10px] pb-[10px] rounded-[8px] border-[1px] border-opacity-[100%] border-gray w-[max-content] top-[30px] flex flex-col gap-[5px] right-[0px] bg-white bg-opacity-[100%] z-50`
										: `hidden`
								}
							>
								<HashLink
									smooth
									to={`/graphic-design`}
									className="no-underline focus:outline-none text-[14px] font-syne text-gray"
								>
									Graphic Design
								</HashLink>
								<HashLink
									smooth
									to={`/web-design-and-development`}
									className="no-underline focus:outline-none text-[14px] font-syne text-gray"
								>
									Web Design &amp; Development
								</HashLink>
							</div>
						</div>
						<HashLink smooth to={`/contact`} className="tracking-[0.025em] border-[transparent] border-[1px] border-solid inline-block focus:outline-none text-[14px] rounded-[8px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-gray bg-opacity-[100%] text-white text-opacity-[100%]">
							<span className="font-syne">Contact Me</span>
						</HashLink>
					</div>
					<div
						id="mobile-menu-6447a93c1a6de-65059f4b8dee5"
						className={
							showNav == true
								? `flex flex-col space-y-[20px] absolute top-[96px] right-[0px] left-[0px] bottom-[auto]  pr-[24px] pl-[24px] justify-center items-center pt-[32px] pb-[32px] z-50 bg-white bg-opacity-[100%]`
								: `hidden`
						}
					>
						<HashLink smooth
							to={`/`}
							className="no-underline focus:outline-none text-[14px] font-syne text-gray"
						>
							Home
						</HashLink>
						<HashLink smooth
							to={`/about`}
							className="no-underline focus:outline-none text-[14px] font-syne text-gray"
						>
							About
						</HashLink>
						{/* <HashLink
							href="/blog"
							className="no-underline focus:outline-none text-[14px] font-syne text-gray"
						>
							Blog
						</HashLink> */}
						<HashLink smooth
							to={`/graphic-design`}
							className="no-underline focus:outline-none text-[14px] font-syne text-gray"
						>
							Graphic Design
						</HashLink>
						<HashLink smooth
							to={`/web-design-and-development`}
							className="no-underline focus:outline-none text-[14px] font-syne text-gray"
						>
							Web Design & Development
						</HashLink>
						<HashLink smooth to={`/contact`} className="tracking-[0.025em] border-[transparent] border-[1px] border-solid inline-block focus:outline-none text-[14px] rounded-[8px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] bg-gray bg-opacity-[100%] text-white text-opacity-[100%]">
							<span className="font-syne">Contact Me</span>
						</HashLink>
					</div>
					<div className="space-x-[32px] flex sm:hidden">
						<button
							type="button"
							id="open-menu-6447a93c1a6e5-65059f4b8dee9"
							onClick={showNavBar}
							className={
								showNav == false
									? `text-[16px] leading-[24px] font-medium text-gray flex items-center rounded-[6px] whitespace-nowrap focus:outline-none pt-[12px] pr-[12px] pb-[12px] pl-[12px]`
									: "hidden"
							}
						>
							<i
								id="open-mobile-menu-6447a93c1a6e8-6447a93c1a6de-65059f4b8deef"
								className="inline-block w-[24px] h-[24px] text-gray text-opacity-[100%] max-sm:text-opacity-[100%]"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</i>
						</button>
						<button
							type="button"
							onClick={showNavBar}
							id="close-menu-6447a93c1a6e7-65059f4b8deee"
							className={
								showNav == true
									? `text-[16px] leading-[24px] font-medium text-gray flex items-center rounded-[6px] whitespace-nowrap focus:outline-none pt-[12px] pr-[12px] pb-[12px] pl-[12px] border-opacity-[100%] border-white`
									: "hidden"
							}
						>
							<i
								id="open-mobile-menu-6447a93c1a6e8-6447a93c1a6de-65059f4b8deef"
								className="inline-block w-[24px] h-[24px] text-gray text-opacity-[100%] max-sm:text-opacity-[100%]"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									></path>
								</svg>
							</i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavbarLight;
