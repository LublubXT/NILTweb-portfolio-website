import React from 'react'

function DesignServiceItem({ service, price, children }) {
	return (
		<div className="pt-[20px] pr-[20px] pb-[20px] pl-[20px] rounded-[8px] border-[2px] w-[100%] border-[#3e3e3e] border-opacity-[100%]">
			<img
				src="https://assets.ycodeapp.com/assets/app23945/Images/4UspwAdpZkRG5aCsF4D0VD0TXPeUUcxO0T98u6qY.svg"
				className="w-[auto] h-[auto] max-w-[100%] mb-[24px]"
			/>
			<h1 className="font-bold text-[20px] sm:text-[24px]">
				{service}
			</h1>
			<span className="text-[#3e3e3e] text-opacity-[50%] text-[20px]">
				{price}
			</span>
			{children}
		</div>
	)
}

export default DesignServiceItem;