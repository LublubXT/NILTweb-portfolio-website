import React from "react";

function HomeTestimonial() {
	return (
		<div className="overflow-hidden max-h-fit pt-[140px] pb-[250px] leading-[1.375em] sm:leading-none">
			<div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] sm:pr-[24px] pr-[24px] md:pr-[32px] pb-[0] sm:pl-[24px] pl-[24px] md:pl-[32px] flex flex-col items-center justify-start relative">
				<h1 className="font-syne text-center font-bold text-[36px] sm:text-[48px] leading-[1.375em] sm:leading-none text-gray text-opacity-[100%]">
					Customer testimonials
				</h1>
				<hr className="mt-[20px] mb-[20px] border-t-[1px] w-[85px] ml-[auto] mr-[auto] h-[4px] border-none bg-gray bg-opacity-[100%]" />
				<p className="font-syne text-center text-[24px] sm:text-[30px] max-w-[640px] mt-[8px] leading-[1.375em] sm:leading-none text-gray text-opacity-[100%]">
					“Thank you so much Bro. Caleb it is very much appreciated.”
				</p>
				<span className="text-center font-syne font-bold text-[16px] sm:text-[18px] mt-[20px] text-gray text-opacity-[100%]">
					Pastor Wesley Bowers
				</span>
				<span className="text-center font-syne text-[14px] sm:text-[16px] text-gray text-opacity-[50%]">
					Victoria Baptist Church
				</span>
				<img
					src="https://assets.ycodeapp.com/assets/app23945/Images/CS8XQOnfHdl86kJZVFjYUDayISffrGRaa5bMLbPb.svg"
					className="w-[auto] h-[auto] max-w-[100%] absolute top-[-100px] sm:right-[-450px] right-[-350px] md:right-[-200px]"
				/>
				<img
					src="https://assets.ycodeapp.com/assets/app23945/Images/Uxp1jHsLFhwLCAegKEsQUsbnC3pNeLw1uySvjLGq.svg"
					className="w-[auto] h-[auto] max-w-[100%] absolute top-[-100px] sm:left-[-450px] left-[-350px] md:left-[-200px]"
				/>
			</div>
		</div>
	);
}

export default HomeTestimonial;
