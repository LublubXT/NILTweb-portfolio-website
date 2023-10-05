import React from "react";
import Footer from "../components/Footer";
import NavbarLight from "../components/NavbarLight";
import Contact from "../components/Contact";

function AboutPage() {
	return (
		<div>
			<NavbarLight />
			<section className="md:pt-[100px] sm:pt-[100px] pt-[100px] lg:pt-[140px] md:pb-[100px] sm:pb-[100px] pb-[100px] lg:pb-[140px]">
				<div className="mt-[0] mr-[auto] mb-[0] ml-[auto] pt-[0] sm:pr-[24px] pr-[24px] md:pr-[32px] pb-[0] sm:pl-[24px] pl-[24px] md:pl-[32px] max-w-[1280px]">
					<div className="grid md:grid-cols-1 sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
						<div className="">
							<img
								src="https://assets.ycodeapp.com/assets/app23945/Images/TpacVwht9yA8JIKAIzbqJUOmdSzZ9VRLgCQwpRbT.png"
								srcSet="https://assets.ycodeapp.com/assets/app/images/4wDAOPBzI2JesOV9NG9kX8Sz8Tzhimfq9jac20qf.png 1080w, https://assets.ycodeapp.com/assets/app/images/GXWs0zr0UktXAddopgSvrZZP5sKNZtP6yaxD2wfv.png 800w, https://assets.ycodeapp.com/assets/app/images/BHom4LLq90ARh5kEehv1c158mCviWSgyV47c8tdT.png 500w, https://assets.ycodeapp.com/assets/app/images/8FhMWPoSxicQReEvSDHzmJxQM6FzEe8wJE6zAcfo.png 150w, https://assets.ycodeapp.com/assets/app23945/Images/TpacVwht9yA8JIKAIzbqJUOmdSzZ9VRLgCQwpRbT.png 1199w"
								sizes="(max-width: 1199px) 100vw, 1199px"
								className="w-[100%] sm:w-[auto] h-[auto] md:max-w-[500px] sm:max-w-[500px] max-w-[500px] lg:max-w-[100%] rounded-[12px] md:ml-[auto] sm:ml-[auto] ml-[auto] lg:ml-0 md:mr-[auto] sm:mr-[auto] mr-[auto] lg:mr-0"
							/>
						</div>
						<div className="font-syne md:w-[max-content] sm:w-[max-content] w-[100%] lg:w-auto md:ml-[auto] sm:ml-[auto] ml-[auto] lg:ml-0 md:mr-[auto] sm:mr-[auto] mr-[auto] lg:mr-0">
							<h1 className="text-[36px] sm:text-[48px] text-[black] leading-[1.1] font-bold tracking-[-0.025em] mb-[16px] text-left max-w-[480px]">
								About
							</h1>
							<p className="text-[20px] text-[black] text-opacity-[50%] text-left max-w-[480px] sm:w-[100%] w-[100%] md:w-auto">
								Hi, my name is Caleb Gross. I am missionary kid. One of my
								favorite things to do is graphic design and web design and
								development. I love all sorts of tech and machines, from the
								humble typewriter to the modern super-computer.
							</p>
						</div>
					</div>
				</div>
			</section>
			<img
				src="https://assets.ycodeapp.com/assets/app23945/Images/EQELJLGNbEhJwM3qU1ocDjZYqrzk2IrmM3AYMhzc.svg"
				className="max-w-[100%] object-top object-cover w-[100%] h-[200px]"
			/>
			<Contact />
			<Footer />
		</div>
	);
}

export default AboutPage;
