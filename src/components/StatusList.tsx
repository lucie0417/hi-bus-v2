import busStopInfo from '../data/busStopOfRoute.json';
import busIcon from '../assets/images/icon-bus.svg';
import wheelIcon from '../assets/images/icon-wheelchair.svg'
import { Badge } from "@/components/ui/badge"

const StatusList = () => {
	return (
		<ul className='px-5 divide-y divide-gray-light text-dark-blue md:px-10 lg:px-6'>
			{busStopInfo[0].Stops.map((stop: any) => (
				<li className='relative flex items-center py-3'>
					<Badge className='px-4 py-2 bg-main-red/30 text-sm text-main-red font-medium hover:bg-main-red/30'>
						進站中
					</Badge>
					<span className='ml-2'>{stop.StopName.Zh_tw}</span>

					<Badge className='bg-gray-light hover:bg-gray-light'>
						<img src={busIcon} alt="BusIcon" />
						<img src={wheelIcon} alt="wheelchair Icon" />
						<span className='text-gray-dark font-english font-light'>712-SW</span>
					</Badge>

					<div className='absolute -right-2 top-1/2 w-0.5 h-16 bg-gray-light md:-right-7 lg:-right-3'></div>
					<div className='absolute -right-[11px] md:-right-[31px] lg:-right-[15px]'>
						{/* 未到站 */}
						<span className='relative'>
							<span className='absolute rounded-full w-2 h-2 bg-gray-light right-0'></span>
							<span className='absolute rounded-full h-1 w-1 bg-white right-[2px] top-[2px]'></span>
						</span>
						{/* 到站 */}
						{/* <span className='relative flex h-2 w-2'>
							<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-main-blue opacity-75'></span>
							<span className='relative inline-flex rounded-full h-2 w-2 bg-main-blue'></span>
						</span> */}
					</div>
				</li>
			))}
		</ul>
	)
}

export default StatusList;