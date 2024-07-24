import Footer from '@/components/Footer';
import Mbackground from '../assets/images/M-bg.svg';
import Tbackground from '../assets/images/T-bg.svg';
import Dbackground from '../assets/images/D-bg.svg';
import bus from '../assets/images/M-bus-gif.png'

const Loading = () => {
	return (
		<div className='min-h-screen flex flex-col justify-center items-center'>
			<p className='text-dark-blue text-xl font-medium mb-5 md:mb-20 md:text-2xl'>公車行駛中，請稍候...</p>
			<div className='relative w-full'>
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

export default Loading;