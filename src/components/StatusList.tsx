import busStopInfo from "../data/busStopOfRoute.json";
import busIcon from "../assets/images/icon-bus.svg";
import wheelIcon from "../assets/images/icon-wheelchair.svg";
import { Badge } from "@/components/ui/badge";

const StatusList = () => {
	return (
		<ul className="text-gray500 px-4 pt-2 pb-[120px] overflow-y-auto h-[480px] md:h-96 xl:h-[560px]">
			{busStopInfo[0].Stops.map((stop: any, index: number) => (
				<li key={index} className="relative flex items-center py-3">
					<Badge variant="outline" className="border-green400 text-green400">
						2分
					</Badge>
					<p className="mx-3 font-normal break-words min-w-0">
						{stop.StopName.Zh_tw}
					</p>

					{/* 公車與無障礙標誌 */}
					<Badge className="shrink-0 flex items-center gap-1">
						<img src={busIcon} alt="BusIcon" />
						<img src={wheelIcon} alt="wheelchair Icon" />
						<span>712-SW</span>
					</Badge>

					{/*隱藏最後一個站點連接線 */}
					{index !== busStopInfo[0].Stops.length - 1 && (
						<div className="absolute -right-2 top-1/2 w-0.5 h-16 bg-green300 md:right-2"></div>
					)}

					<div className="absolute -right-[11px] md:right-[5px]">
						{/* 未到站 */}
						<span className="relative">
							<span className="absolute rounded-full w-2 h-2 bg-green300 right-0"></span>
							<span className="absolute rounded-full h-1 w-1 bg-white right-[2px] top-[2px]"></span>
						</span>
						{/* 到站 */}
						{/* <span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-green400"></span>
						</span> */}
					</div>
				</li>
			))}
		</ul>
	)
}

export default StatusList;