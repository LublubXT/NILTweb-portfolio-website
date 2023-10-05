import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeHeader from "./components/Homepage/Header";
import HomePageServices from "./components/Homepage/HomePageServices";
import HomeTestimonial from "./components/Homepage/HomeTestimonial";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			{/* <Navbar /> */}
			<Navbar />
			<HomeHeader />
			<HomePageServices />
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

export default App;
