import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPostItem from "../components/BlogPostItem";
import { Client } from '@notionhq/client';

const NOTION_API_KEY = process.env.NOTION_API_KEY ?? '';

export const notion = new Client({ auth: NOTION_API_KEY });

function BlogPage() {
	getBlogPosts()

	return (
		<div>
			<Navbar />
			<section
				className="bg-no-repeat bg-cover bg-center min-h-[500px] pt-[0px] pb-[0px] relative"
				style={{
					backgroundImage: `url("https://assets.ycodeapp.com/assets/app23945/Images/zQvKXdf9d4gc0l6OvWTgcTaqJF2jU6HA6D8YDyE5.jpg")`,
				}}
			>
				<img
					src="https://assets.ycodeapp.com/assets/app23945/Images/NNcaho6aFw7uQBttRaSCXTffiC39RGWzQqAz1Rjb.svg"
					className="h-[auto] max-w-[100%] w-[100%] absolute z-[100] sm:bottom-[0px] bottom-[0px] md:bottom-[-30px] object-cover object-top max-h-[150px]"
				/>
				<div
					className="h-[100%] pb-[80px] pt-[80px] min-h-[500px] bg-gradient-to-t from-gray via-gray/0 to-gray bg-auto"
					style={{
						backgroundImage: `url(
							"https://assets.ycodeapp.com/assets/app23945/Images/tD9zhsPqVzCmrWzT3DM6Xov8BDnDV7wigzrfZcjB.svg"
						)`,
					}}
				>
					<div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] sm:pr-[24px] pr-[24px] md:pr-[32px] pb-[0] sm:pl-[24px] pl-[24px] md:pl-[32px] font-syne 2xl:mb-[80px] xl:mb-[80px]">
						<span className="text-[14px] text-[#ffffff] text-opacity-[50%] font-semibold tracking-[1.4px]">
							ICONS
						</span>
						<h1 className="text-[36px] sm:text-[48px] font-bold leading-[1.25em] sm:leading-none mt-[10px] mb-[10px] text-[#f2f062] text-opacity-[100%]">
							Cool beautiful icon set.
						</h1>
						<p className="text-[16px] text-opacity-[100%] text-[#ffffff] w-[100%] max-w-[600px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<div className="flex gap-[8px] mt-[24px]">
							<span className="font-syne text-[16px] text-[#f2f062] text-opacity-[100%]">
								Read More
							</span>
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/TC1rl5Qh7k2msdvedKZBaSMF8webWyVlGBQtcUxd.svg"
								className="max-w-[100%] w-[24px] h-[24px]"
							/>
						</div>
						<div className="flex gap-[10px] mt-[44px]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/nVBJ2U4wpaVOziPRgsBzMu3KcKbvth8428vJRU2C.svg"
								className="w-[auto] h-[auto] max-w-[100%]"
							/>
							<div className="flex flex-col font-syne text-opacity-[100%] text-[#ffffff]">
								<span className="text-[14px] text-[#ffffff] text-opacity-[50%] font-semibold">
									Caleb J. Gross
								</span>
								<span className="text-[14px]">11 Jan 2023 • 5 min read</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="pb-[80px] pt-[80px]">
				<div className="max-w-[80rem] mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] sm:pr-[24px] pr-[24px] md:pr-[32px] pb-[0] sm:pl-[24px] pl-[24px] md:pl-[32px]">
					<div className="flex gap-[5px] mb-[60px] overflow-auto w-[max-content] sm:w-auto">
						<button
							type="button"
							className="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-solid inline-block focus:outline-none font-syne border-[2px] w-[max-content] text-[#3e3e3e] text-opacity-[100%] border-[#3e3e3e] border-opacity-[100%]"
						>
							<span className="">View All</span>
						</button>
						<button
							type="button"
							className="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-solid inline-block focus:outline-none font-syne border-[0px] text-[#3e3e3e] text-opacity-[100%]"
						>
							<span className="">Javascript</span>
						</button>
						<button
							type="button"
							className="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-solid inline-block focus:outline-none font-syne border-[0px] text-[#3e3e3e] text-opacity-[100%]"
						>
							<span className="">Github</span>
						</button>
						<button
							type="button"
							className="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-solid inline-block focus:outline-none font-syne border-[0px] text-[#3e3e3e] text-opacity-[100%]"
						>
							<span className="">Design</span>
						</button>
						<button
							type="button"
							className="text-[14px] tracking-[0.025em] pt-[10px] pr-[20px] pb-[10px] pl-[20px] rounded-[8px] border-solid inline-block focus:outline-none font-syne border-[0px] w-[max-content] text-[#3e3e3e] text-opacity-[100%]"
						>
							<span className="">Logo Design</span>
						</button>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-[32px] content-start gap-y-[64px]">
						<BlogPostItem />
						<BlogPostItem />
						<BlogPostItem />
						<BlogPostItem />
						<BlogPostItem />
						<BlogPostItem />
					</div>
					<div className="flex items-center justify-center gap-[50px] mt-[50px]">
						<div className="flex gap-[8px] mt-[24px]">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/qB2oQouCIQyWFkrP7Tsda17JutCXz7a7kyNIgEUy.svg"
								className="max-w-[100%] w-[24px] h-[24px]"
							/>
							<span className="font-syne text-[16px] text-[#3e3e3e] text-opacity-[100%]">
								Previous
							</span>
						</div>
						<div className="flex gap-[8px] mt-[24px]">
							<span className="font-syne text-[16px] text-[#3e3e3e] text-opacity-[100%]">
								Next
							</span>
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/NczFD2GzZV7pUG2iciVKyJvuqgvx6DiFFxZ7ZVRD.svg"
								className="max-w-[100%] w-[24px] h-[24px]"
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default BlogPage;
