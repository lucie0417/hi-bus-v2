import busStopInfo from '../data/busStopOfRoute.json';
import busIcon from '../assets/images/icon-bus.svg';
import wheelIcon from '../assets/images/icon-wheelchair.svg'
import { Badge } from "@/components/ui/badge"

const StatusList = () => {
	return (
		<ul className='px-3 divide-y divide-gray-light text-dark-blue md:px-10'>
			{busStopInfo[0].Stops.map((stop: any) => (
				<li className='flex items-center py-3'>
					<Badge className='px-4 py-2 bg-main-red/30 text-sm text-main-red font-medium'>
						進站中
					</Badge>
					<span className='ml-2'>{stop.StopName.Zh_tw}</span>

					<Badge className='bg-gray-light hover:bg-gray-light'>
						<img src={busIcon} alt="BusIcon" />
						<img src={wheelIcon} alt="wheelchair Icon" />
						<span className='text-gray-dark font-english font-light'>712-SW</span>
					</Badge>

					<div className='relative'>
						<div className='absolute right-1/2 bottom-1/4 w-0.5 h-12 bg-gray-light'></div>

						<span className='relative flex h-2.5 w-2.5'>
							<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-main-green opacity-75'></span>
							<span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-main-green'></span>
						</span>
					</div>
				</li>
			))}
		</ul>
	)
}

export default StatusList;