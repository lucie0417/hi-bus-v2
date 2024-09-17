import { IoReload } from "react-icons/io5";

const NearStops = () => {
	return (
		<div className='flex justify-center'>
			<div className='w-full my-3'>
				<h2 className='flex justify-between items-center my-2 font-medium text-sm'>
					附近站牌
				</h2>
				<div className='flex justify-between items-center my-2'>
					<p>
						貴陽街口
						<span className='text-xs text-gray-default ml-2'>255 m</span>
					</p>
					<button className='text-gray-default'>
						<IoReload />
					</button>

				</div>
				<div className='h-52 rounded-lg md:h-80 bg-beige text-gray-dark'>
					This is MAP!
				</div>
			</div>
		</div>
	)
}

export default NearStops;