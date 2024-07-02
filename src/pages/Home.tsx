import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Mbackground from '../assets/images/M-bg.svg';
import Tbackground from '../assets/images/T-bg.svg';
import Dbackground from '../assets/images/D-bg.svg';
import Dlogo from '../assets/images/D-logo.svg';
import bus from '../assets/images/M-bus-gif.png';


const Home = () => {
	return (
		<div className='relative min-h-screen'>
			<Navbar />

			<div className='grid justify-items-center mt-12 md:mt-20'>
				<img src={Dlogo} alt="Logo" className="lg:w-1/6" />
				<h1 className='text-dark-blue font-medium mt-5 md:text-xl'>
					今天想搭乘哪輛公車呢？
				</h1>
			</div>

			<SearchBar />

			<div className='absolute'>
				<img src={Mbackground} className='w-screen object-cover md:hidden' alt="Background" />
				<img src={Tbackground} className='w-screen object-cover hidden md:block lg:hidden' alt="Background" />
				<img src={Dbackground} className='w-screen object-cover hidden lg:block' alt="Background" />
				<img src={bus} className='w-2/5 animate-bus md:w-auto' alt="Bus" />
			</div>

			<div className='absolute bottom-0 w-full'>
				<Footer />
			</div>
		</div>
	)
}

export default Home;