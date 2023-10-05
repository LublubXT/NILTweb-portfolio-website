import React from "react";

function Contact() {
	return (
		<div className="pb-[80px] pt-[80px] bg-gray bg-opacity-[100%]">
			<div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] sm:pr-[24px] pr-[24px] md:pr-[32px] pb-[0] sm:pl-[24px] pl-[24px] md:pl-[32px] flex flex-col items-center h-[auto]">
				<img
					src="https://assets.ycodeapp.com/assets/app23945/Images/9iie5UW8FBRbHKmj86HqOJGpNDjfbMiJGK7MJnMs.svg"
					className="w-[auto] h-[auto] max-w-[100%] mb-[3px]"
				/>
				<h1 className="font-syne text-center font-bold text-[36px] sm:text-[48px] leading-[1.375em] sm:leading-[1.25em] text-yellow text-opacity-[100%]">
					Contact Me
				</h1>
				<span className="text-opacity-[100%] text-white font-syne text-[18px] max-w-[600px] mt-[24px] text-center">
					If you have any questions about anything, or if you want my services,
					please feel free to contact me, and I will get back with you as soon
					as possible.
				</span>
				<div className="mt-[80px] w-[100%] max-w-[550px]">
					<form className="w-[100%] max-w-[550px] flex flex-col items-stretch" action="https://formspree.io/f/mwkzljno" method="POST">
						<div className="">
							<label className="block tracking-[0.025em] text-opacity-[100%] text-white text-[16px] font-syne mb-[8px]">
								<div className="block">
									<div translate="no" className="block ProseMirror">
										Name
									</div>
								</div>
							</label>
							<input
								type="text"
								name="name"
								className="cursor-default outline-none w-[100%] pt-[10px] pr-[16px] pb-[10px] pl-[16px] tracking-[0.025em] rounded-[8px] border-solid placeholder-opacity-[50%] focus:border-yellow focus:border-opacity-[50%] disabled:opacity-[50%] bg-[#4d4d4d] bg-opacity-[100%] font-syne text-[16px] text-opacity-[100%] text-white mb-[24px]"
							/>
						</div>
						<div className="">
							<label className="block tracking-[0.025em] text-opacity-[100%] text-white text-[16px] font-syne mb-[8px]">
								<div className="block">
									<div translate="no" className="block ProseMirror">
										Email
									</div>
								</div>
							</label>
							<input
								type="text"
								name="email"
								className="cursor-default outline-none w-[100%] pt-[10px] pr-[16px] pb-[10px] pl-[16px] tracking-[0.025em] rounded-[8px] border-solid placeholder-opacity-[50%] focus:border-yellow focus:border-opacity-[50%] disabled:opacity-[50%] bg-[#4d4d4d] bg-opacity-[100%] font-syne text-[16px] text-opacity-[100%] text-white mb-[24px]"
							/>
						</div>
						<div className="">
							<label className="block tracking-[0.025em] text-opacity-[100%] text-white text-[16px] font-syne mb-[8px]">
								<div className="block">
									<div translate="no" className="block ProseMirror">
										Phone
									</div>
								</div>
							</label>
							<input
								type="tel"
								name="phone number"
								className="cursor-default outline-none w-[100%] pt-[10px] pr-[16px] pb-[10px] pl-[16px] tracking-[0.025em] rounded-[8px] border-solid placeholder-opacity-[50%] focus:border-yellow focus:border-opacity-[50%] disabled:opacity-[50%] bg-[#4d4d4d] bg-opacity-[100%] font-syne text-[16px] text-opacity-[100%] text-white mb-[24px]"
							/>
						</div>
						<label className="block tracking-[0.025em] text-opacity-[100%] text-white text-[16px] font-syne mb-[8px]">
							<div className="block">
								<div translate="no" className="block ProseMirror">
									Message
								</div>
							</div>
						</label>
						<textarea
							name="message"
							rows="4"
							className="cursor-default outline-none w-[100%] pt-[8px] pr-[12px] pb-[8px] pl-[12px] text-[14px] tracking-[0.025em] leading-[1.25rem] rounded-[6px] border-solid placeholder-[black] placeholder-opacity-[50%] focus:border-yellow focus:border-opacity-[50%] disabled:opacity-[50%] text-opacity-[100%] text-white bg-[#4d4d4d] bg-opacity-[100%]"
						></textarea>
						<button
							type="submit"
							className="tracking-[0.025em] border-[transparent] border-[1px] border-solid inline-block focus:outline-none text-[14px] rounded-[8px] pt-[10px] pb-[10px] pr-[20px] pl-[20px] ml-[auto] mr-[auto] mt-[24px] bg-yellow bg-opacity-[100%] text-gray text-opacity-[100%]"
						>
							<span className="font-syne">Submit</span>
						</button>
					</form>
				</div>
				<img
					src="https://assets.ycodeapp.com/assets/app23945/Images/lnFZ6v3HaRdzBIAAlDLlpsxkugHoFQmcPRwVE1Yh.svg"
					className="w-[auto] h-[auto] max-w-[100%] relative left-[60px]"
				/>
			</div>
		</div>
	);
}

export default Contact;
