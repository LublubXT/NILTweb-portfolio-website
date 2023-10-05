import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DesignServiceItem from "../components/GraphicDesignPage/DesignServiceItem";
import HomeTestimonial from "../components/Homepage/HomeTestimonial";
import Contact from "../components/Contact";

function GraphicDesignPage() {
	return (
		<div>
			<Navbar />
			<section className="pb-[80px] sm:pt-[80px] pt-[80px] md:pt-[80px] relative">
				<img
					src="https://assets.ycodeapp.com/assets/app23945/Images/EwxYetXGSwNBiq0FxiFiJrWsxDRegyYCDGFYV4wa.svg"
					className="h-[auto] w-full min-h-[200px] sm:absolute absolute md:absolute sm:top-[0px] top-[0px] md:top-[0px] z-[0] object-cover sm:object-bottom object-bottom"
				/>
				<div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] bg-opacity-[100%] bg-[#ffffff] sm:pl-[40px] pl-[20px] md:pl-[60px] sm:pr-[40px] pr-[20px] md:pr-[60px] sm:pt-[40px] pt-[20px] md:pt-[60px] sm:pb-[40px] pb-[20px] md:pb-[60px] border-[4px] rounded-[8px] z-[100] relative font-syne flex flex-col gap-[70px] border-[#3e3e3e] border-opacity-[100%]">
					<div className="">
						<span className="text-[24px] font-bold text-[#3e3e3e] tracking-[1.4px] uppercase text-opacity-[25%]">
							Pricing
						</span>
						<h1 className="text-[48px] sm:text-[48px] font-bold leading-[1.25em] sm:leading-none text-[#3e3e3e] text-opacity-[100%]">
							Graphic Design
						</h1>
					</div>
					<div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[20px] sm:gap-[48px] content-stretch items-stretch grid-flow-row">
						<DesignServiceItem price={"$60/side"} service={"Flyer / Poster"} />
						<DesignServiceItem price={"$20/page"} service={"Handout"} />
						<DesignServiceItem
							price={"$30 - two sided (front & back)"}
							service={"Gospel Tract"}
						>
							<span className="text-[#3e3e3e] text-opacity-[50%] block text-[20px]">
								$40 - four sided (bi-fold)
							</span>
							<span className="text-[#3e3e3e] text-opacity-[50%] block text-[20px]">
								$50 - six sided (tri-fold)
							</span>
						</DesignServiceItem>
						<DesignServiceItem price={"$30"} service={"Business Card"} />
						<DesignServiceItem
							price={"$25 - two sided (front & back)"}
							service={"Bulletin"}
						>
							<span className="text-[#3e3e3e] text-opacity-[50%] block text-[20px]">
								$50 - four sided (bi-fold)
							</span>
							{/* <hr /> */}
							<span className="text-[#3e3e3e] text-opacity-[50%] block text-[20px]">
								$10/month - monthly updates
							</span>
							<span className="text-[#3e3e3e] text-opacity-[50%] block text-[20px]">
								$40/month - weekly updates
							</span>
						</DesignServiceItem>
						<DesignServiceItem price={"$45"} service={"Prayer Card"} />
						<DesignServiceItem
							price={"$40 - bi-fold"}
							service={"Pamphlet / Brochure"}
						>
							<span className="text-[#3e3e3e] text-opacity-[50%] block text-[20px]">
								$60 - tri-fold
							</span>
						</DesignServiceItem>
						<DesignServiceItem price={"$50/side"} service={"Banner"} />
						<DesignServiceItem price={"$50"} service={"Door Hanger"} />

						<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] border-[2px] w-[100%] bg-[#f2f062] bg-opacity-[100%] border-[#3e3e3e] border-opacity-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
								className="w-[auto] h-[auto] max-w-[100%] mb-[24px]"
							/>
							<h1 className="font-bold text-[24px]">Other</h1>
							<span className="text-[#3e3e3e] text-opacity-[50%] text-[20px]">
								Contact Me
							</span>
						</div>
					</div>
					<div className="grid gap-[50px] sm:grid-cols-2 grid-cols-1 md:grid-cols-3 sm:grid-flow-row grid-flow-row md:grid-flow-col mt-[30px] sm:mt-0">
						<div className="">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/Vkhx1AoDDBlnzmT5q6rjVMxLaoFBuhLt4Yl1gJKr.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-bold text-[36px] mt-[24px] leading-[1.25em] sm:leading-none text-[#3e3e3e] text-opacity-[100%]">
								About the Plans
							</h1>
							<p className="text-[20px] leading-[1.5em] mt-[10px]">
								If you need designs on a regular (monthly) basis, then a plan
								might be just what you need. If you are needing my design
								services on a regular basis, then these plans could possibly
								save you money.
							</p>
							<p className="text-[20px] leading-[1.5em] mt-[10px]">
								Plans are purchased every <em className="">every year</em>.
								<strong className="ml-1">
									They are not purchased every quarter.
								</strong>
							</p>
						</div>
						<div className="col-start-[1] sm:col-start-[2] sm:col-end-[3] col-end-[auto] md:col-end-[4] grid sm:grid-cols-1 grid-cols-1 md:grid-cols-2 gap-[20px]">
							<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] w-[100%] border-[0px] rounded-[8px] bg-[#f4f4f4] bg-opacity-[100%] text-[#3e3e3e] text-opacity-[100%]">
								<img
									src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
									className="w-[auto] h-[auto] max-w-[100%] mb-[24px]"
								/>
								<h1 className="font-bold text-[30px] sm:text-[30px]">
									Byte Plan
								</h1>
								<span className="text-[20px] block text-[#3e3e3e] text-opacity-[100%]">
									$50/quarter
								</span>
								<span className="text-[#3e3e3e] text-opacity-[50%] text-[20px]">
									$200 billed yearly
								</span>
								<div className="mt-[20px] flex flex-col gap-[5px]">
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/vs7HrmGpaEHDFRxMxB8PmulZpKtzMbcUB6ziIxeC.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">
											Up to <strong className="">one</strong> design per quarter
										</span>
									</div>
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/vs7HrmGpaEHDFRxMxB8PmulZpKtzMbcUB6ziIxeC.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">Unlimited revisions</span>
									</div>
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/vs7HrmGpaEHDFRxMxB8PmulZpKtzMbcUB6ziIxeC.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">Email and phone support</span>
									</div>
								</div>
							</div>
							<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] border-[2px] w-[100%] text-opacity-[100%] text-[#ffffff] border-opacity-[100%] sm:border-opacity-[100%] border-[#3e3e3e] sm:border-[#ffffff] bg-[#3e3e3e] bg-opacity-[100%]">
								<img
									src="https://assets.ycodeapp.com/assets/app23945/Images/6N1TK3rIAAL3riY8ocyBgzyXkOYIqv6hlxOr4K9m.svg"
									className="w-[auto] h-[auto] max-w-[100%] mb-[24px]"
								/>
								<h1 className="font-bold text-[30px] sm:text-[30px] leading-[1.375em] sm:leading-none">
									Kilobyte Plan
								</h1>
								<span className="text-[20px] block text-opacity-[100%] text-[#ffffff]">
									$90/quarter
								</span>
								<span className="text-opacity-[50%] text-[20px] text-[#ffffff]">
									$360 billed yearly
								</span>
								<div className="mt-[20px] flex flex-col gap-[5px]">
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/BMdmE2YxwizoBvP8eVFiBd4IiRsI6CZJzDOugDFB.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">
											Up to <strong className="">two</strong> design per quarter
										</span>
									</div>
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/BMdmE2YxwizoBvP8eVFiBd4IiRsI6CZJzDOugDFB.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">Unlimited revisions</span>
									</div>
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/BMdmE2YxwizoBvP8eVFiBd4IiRsI6CZJzDOugDFB.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">Email and phone support</span>
									</div>
								</div>
							</div>
							<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] border-[2px] w-[100%] text-[#3e3e3e] text-opacity-[100%] border-[#3e3e3e] border-opacity-[100%]">
								<img
									src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
									className="w-[auto] h-[auto] max-w-[100%] mb-[24px]"
								/>
								<h1 className="font-bold text-[30px] sm:text-[30px] leading-[1.375em] sm:leading-none">
									Megabyte Plan
								</h1>
								<span className="text-[20px] block text-[#3e3e3e] text-opacity-[100%]">
									$125/quarter
								</span>
								<span className="text-[#3e3e3e] text-opacity-[50%] text-[20px]">
									$500 billed yearly
								</span>
								<div className="mt-[20px] flex flex-col gap-[5px]">
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/vs7HrmGpaEHDFRxMxB8PmulZpKtzMbcUB6ziIxeC.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">
											Up to <strong className="">three</strong> design per
											quarter
										</span>
									</div>
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/vs7HrmGpaEHDFRxMxB8PmulZpKtzMbcUB6ziIxeC.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">Unlimited revisions</span>
									</div>
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/vs7HrmGpaEHDFRxMxB8PmulZpKtzMbcUB6ziIxeC.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">Email and phone support</span>
									</div>
								</div>
							</div>
							<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] border-[2px] w-[100%] bg-[#f2f062] bg-opacity-[100%] text-[#3e3e3e] text-opacity-[100%] border-[#3e3e3e] border-opacity-[100%]">
								<img
									src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
									className="w-[auto] h-[auto] max-w-[100%] mb-[24px]"
								/>
								<h1 className="font-bold text-[30px] sm:text-[30px] leading-[1.375em] sm:leading-none">
									Gigabyte Plan
								</h1>
								<span className="text-[20px] block text-[#3e3e3e] text-opacity-[100%]">
									$200/quarter
								</span>
								<span className="text-[#3e3e3e] text-opacity-[50%] text-[20px]">
									$800 billed yearly
								</span>
								<div className="mt-[20px] flex flex-col gap-[5px]">
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/vs7HrmGpaEHDFRxMxB8PmulZpKtzMbcUB6ziIxeC.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">
											Up to <strong className="">five</strong> design per
											quarter
										</span>
									</div>
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/vs7HrmGpaEHDFRxMxB8PmulZpKtzMbcUB6ziIxeC.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">Unlimited revisions</span>
									</div>
									<div className="flex gap-[10px] items-center">
										<img
											src="https://assets.ycodeapp.com/assets/app23945/Images/vs7HrmGpaEHDFRxMxB8PmulZpKtzMbcUB6ziIxeC.svg"
											className="w-[auto] h-[auto] max-w-[100%]"
										/>
										<span className="text-[20px]">Email and phone support</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-[30px] text-[#3e3e3e] text-opacity-[100%]">
						<h1 className="text-[48px] font-bold mb-[30px]">Process</h1>
						<div className="pb-[20px] border-b-[1px] border-[#3e3e3e] border-opacity-[50%] pt-[0px] mb-[10px] sm:mb-0">
							<span className="text-[20px] text-[#3e3e3e] text-opacity-[50%] mb-[10px]">
								01
							</span>
							<h1 className="text-[36px] font-bold leading-[1] mb-[5px] mt-[10px] sm:mt-[10px]">
								Details
							</h1>
							<p className="text-[20px]">
								We schedule a call, I gather details, and provide a quote.
							</p>
						</div>
						<div className="pt-[20px] pb-[20px] border-b-[1px] border-[#3e3e3e] border-opacity-[50%] mb-[10px] sm:mb-0">
							<span className="text-[20px] text-[#3e3e3e] text-opacity-[50%] mb-[10px]">
								02
							</span>
							<h1 className="text-[36px] font-bold leading-[1] mb-[5px] mt-[10px] sm:mt-[10px]">
								Design
							</h1>
							<p className="text-[20px]">
								I design it, you look at it, then I make any changes if needed.
								We repeat this process until you get desired results.
							</p>
						</div>
						<div className="pt-[20px] pb-[20px] border-[#3e3e3e] border-opacity-[50%] mb-[10px] sm:mb-0">
							<span className="text-[20px] text-[#3e3e3e] text-opacity-[50%] mb-[10px]">
								03
							</span>
							<h1 className="text-[36px] font-bold leading-[1] mb-[5px] mt-[10px] sm:mt-[10px]">
								Deliver
							</h1>
							<p className="text-[20px]">I send it to you (two options):</p>
							<p className="text-[20px] ml-[20px]">
								1. I send you the high resolution PNG, JPG, or PDF file.
							</p>
							<p className="text-[20px] ml-[20px]">
								2. I have it printed and shipped to you. You will have to pay
								for printing and shipping costs, you will not have to pay for my
								time to have it printed and shipped.
							</p>
						</div>
						<p className="text-[20px] font-bold mt-[20px]">
							If this sounds good to you, contact me below and we will work on
							scheduling a call.
						</p>
					</div>
				</div>
			</section>
			<section className="pb-[80px] pt-[80px]">
				<div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] sm:pr-[24px] pr-[24px] md:pr-[32px] pb-[0] sm:pl-[24px] pl-[24px] md:pl-[32px] font-syne">
					<div className="">
						<span className="text-[24px] font-bold text-[#3e3e3e] tracking-[1.4px] uppercase text-opacity-[25%]">
							work
						</span>
						<h1 className="text-[48px] sm:text-[48px] font-bold leading-[1.25em] sm:leading-none text-[#3e3e3e] text-opacity-[100%]">
							Graphic Design
						</h1>
					</div>
					<div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[20px] sm:gap-[48px] content-stretch items-stretch grid-flow-row mt-[70px]">
						<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] w-[100%] border-[0px] flex flex-col items-center gap-[24px] bg-[#f4f4f4] bg-opacity-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-bold max-sm:text-[20px] text-[24px] leading-[1.375em]">
								Flyer/Poster Design
							</h1>
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/V6hUcmgFkcPsWauA7ffol28eTfcK3GRkSJD8Z3Km.png"
								className="w-[auto] h-[auto] max-w-[100%] max-h-[331px] border-[2px] rounded-[8px] border-opacity-[100%] border-[#ffffff]"
							/>
						</div>
						<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] w-[100%] border-[0px] flex flex-col items-center gap-[24px] bg-[#f4f4f4] bg-opacity-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-bold max-sm:text-[20px] text-[24px] leading-[1.375em]">
								Flyer/Poster Design
							</h1>
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/GwXooFyraqNKkmM8jn6uFNVmjbr39hBe8tdTXfci.png"
								className="w-[auto] h-[auto] max-w-[100%] max-h-[331px] border-[2px] rounded-[8px] border-opacity-[100%] border-[#ffffff]"
							/>
						</div>
						<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] w-[100%] border-[0px] flex flex-col items-center gap-[24px] bg-[#f4f4f4] bg-opacity-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-bold max-sm:text-[20px] text-[24px] leading-[1.375em]">
								Flyer/Poster Design
							</h1>
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/Tn7tODwRFq7dKRUDfHQ5FIhP5tKbg538qIq6WdV8.png"
								className="w-[auto] h-[auto] max-w-[100%] max-h-[331px] border-[2px] rounded-[8px] border-opacity-[100%] border-[#ffffff]"
							/>
						</div>
						<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] w-[100%] border-[0px] flex flex-col items-center gap-[24px] bg-[#f4f4f4] bg-opacity-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-bold max-sm:text-[20px] text-[24px] leading-[1.375em]">
								Flyer/Poster Design
							</h1>
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/VHA67DQcTUBoaaHdpPUtzqZBIqDwfqzbAcXb414s.png"
								className="w-[auto] h-[auto] max-w-[100%] max-h-[331px] border-[2px] rounded-[8px] border-opacity-[100%] border-[#ffffff]"
							/>
						</div>
						<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] w-[100%] border-[0px] flex flex-col items-center gap-[24px] bg-[#f4f4f4] bg-opacity-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-bold max-sm:text-[20px] text-[24px] leading-[1.375em]">
								Gospel Tract Design
							</h1>
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/BPEd3n5lEyPKJ83xbac2TTSIj4wkOOpr5Ax1BGnT.png"
								className="w-[auto] h-[auto] max-w-[100%] max-h-[331px] border-[2px] rounded-[8px] border-opacity-[100%] border-[#ffffff]"
							/>
						</div>
						<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] w-[100%] border-[0px] flex flex-col items-center gap-[24px] bg-[#f4f4f4] bg-opacity-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-bold max-sm:text-[20px] text-[24px] leading-[1.375em]">
								Door hanger Design
							</h1>
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/3U49U2dZ3j8lVXzOiBHJ3VkY3nVB6Cubsl0LKYIz.png"
								className="w-[auto] h-[auto] max-w-[100%] max-h-[331px] border-[2px] rounded-[8px] border-opacity-[100%] border-[#ffffff]"
							/>
						</div>
						<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] border-[2px] w-[100%] col-start-[1] sm:col-end-[3] col-end-[2] md:col-end-[4] bg-[#f2f062] bg-opacity-[100%] border-[#3e3e3e] border-opacity-[100%]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
								className="w-[auto] mb-[24px] h-[auto] max-w-[100%]"
							/>
							<h1 className="font-bold text-[24px]">
								Your design could be next!
							</h1>
							<span className="text-[#3e3e3e] text-opacity-[50%] text-[20px]">
								If you would like me to do some design work, feel free to
								contact me below.
							</span>
						</div>
					</div>
				</div>
			</section>
			<HomeTestimonial />
			<img
				src="https://assets.ycodeapp.com/assets/app23945/Images/EQELJLGNbEhJwM3qU1ocDjZYqrzk2IrmM3AYMhzc.svg"
				className="max-w-[100%] object-top object-cover w-[100%] h-[200px]"
			/>
			<Contact />
			<Footer />
		</div>
	);
}

export default GraphicDesignPage;
