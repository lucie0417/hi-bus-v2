import { Badge } from "@/components/ui/badge"
import { IoCloudyNight, IoRefresh } from "react-icons/io5";


const WeatherBox = () => {
	return (
		<>
			<div className='flex justify-between items-center w-full h-20 p-2 my-4 text-green500 font-semibold rounded-xl md:hidden'>
				<div>
					<div>
						<p className="text-3xl mr-2">13°C</p>
						<p className="text-base">9 / 15°</p>
					</div>
				</div>
				<div className="flex">
					<IoCloudyNight size={48} />
					<p className="text-xs font-medium pl-3">
						10月26日<br />
						晴時多雲<br />
						降雨 20%
					</p>
				</div>

				<div>
					<Badge className="bg-green500 text-white font-medium ml-auto">
						臺北市
					</Badge>
					<button className="flex items-center text-xs font-light mt-2">
						重新整理
						<IoRefresh />
					</button>
				</div>
			</div>
		</>
	)
}
export default WeatherBox;