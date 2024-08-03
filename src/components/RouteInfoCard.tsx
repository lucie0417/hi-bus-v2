import { useState } from "react";
import { GoBell, GoBellFill, GoClock } from "react-icons/go";
import { FaDirections, FaBus } from "react-icons/fa";

const RouteInfoCard = () => {
	const [notifyOn, setNotifyOn] = useState(true);

	return (
		<>
			<div className='w-32 h-36 p-3 mr-3 my-3 bg-gray-dark rounded-lg shrink-0 text-gray-default text-sm'>
				<p className='flex justify-between items-center text-main-yellow text-lg font-medium'>
					<span className='text-beige'>302</span>
					{notifyOn ? <GoBellFill /> : <GoBell />}
				</p>
				<p className='flex items-center my-2 '>
					<FaDirections />
					<span className='text-beige ml-2 mr-1'>新北投</span>
					方向
				</p>
				<p className='flex items-center my-2'>
					<GoClock />
					<span className='text-beige ml-2 mr-1'>6</span>
					分鐘
				</p>
				<p className='flex items-center my-2'>
					<FaBus />
					<span className='text-beige ml-2'>263-FT</span>
				</p>
			</div>
		</>
	)
}

export default RouteInfoCard;