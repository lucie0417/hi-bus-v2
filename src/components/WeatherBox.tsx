import { IoFootsteps, IoBicycleSharp, IoPartlySunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const WeatherBox = () => {
	return (
		<>
			<div className='flex justify-between h-16 my-3'>
				<div className='flex w-48 p-2 bg-main-yellow rounded-xl text-gray-dark'>
					<IoPartlySunnyOutline size={48} />
					<p className='grid justify-items-center items-center text-sm ml-1'>
						<span>27˚C</span>
						<span>臺北市</span>
					</p>
				</div>

				<div className='grid w-full ml-3'>
					<Link to="/navigation" className='flex justify-center items-center mb-2 border border-beige rounded-lg bg-gray-dark hover:bg-beige hover:text-gray-dark'>
						<IoFootsteps size={20} />
						<span className='ml-2 text-sm'>今天想去哪呢</span>
					</Link>

					<Link to="/loading" className='flex justify-center items-center border border-beige rounded-lg bg-gray-dark hover:bg-beige hover:text-gray-dark'>
						<IoBicycleSharp size={20} />
						<span className='ml-2 text-sm'>共享單車查詢</span>
					</Link>
				</div>
			</div>
		</>
	)
}
export default WeatherBox;