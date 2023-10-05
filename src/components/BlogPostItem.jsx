/* eslint-disable react/prop-types */
import React from "react";

function BlogPostItem({ category }) {
	return (
		<div className="font-syne h-[auto]">
			<img
				src="https://assets.ycodeapp.com/assets/app23945/Images/HzIKPe9nHCYSUkya0YhLuNtsqeJqMeZ3r8ITCv9q.png"
				className="h-[auto] max-w-[100%] border-[4px] rounded-[8px] w-[100%] mb-[24px] border-[#3e3e3e] border-opacity-[100%]"
			/>
			<span className="text-[14px] font-semibold text-[#3e3e3e] text-opacity-[50%] uppercase tracking-[1.4px] mt-[24px]">
				{category}
			</span>
			<h1 className="font-bold text-[24px] mt-[8px] mb-[8px]">
				Javascript Functions
			</h1>
			<p className="text-[14px]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</p>
			<div className="flex gap-[10px] mt-[24px]">
				<img
					src="https://assets.ycodeapp.com/assets/app23945/Images/nVBJ2U4wpaVOziPRgsBzMu3KcKbvth8428vJRU2C.svg"
					className="w-[auto] h-[auto] max-w-[100%]"
				/>
				<div className="flex flex-col font-syne text-opacity-[100%] text-[#ffffff]">
					<span className="text-[14px] font-semibold text-[#3e3e3e] text-opacity-[50%]">
						Caleb J. Gross
					</span>
					<span className="text-[14px] text-[#3e3e3e] text-opacity-[100%]">
						11 Jan 2023 • 5 min read
					</span>
				</div>
			</div>
		</div>
	);
}

export default BlogPostItem;
