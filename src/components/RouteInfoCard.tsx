import { Badge } from "@/components/ui/badge"
import { IoChevronBack } from "react-icons/io5";

type RouteInfoCardProps = {
	onBack: () => void;
}

const RouteInfoCard = ({ onBack }: RouteInfoCardProps) => {
	return (
		<>
			<div className="absolute top-4 left-4 w-1/2 bg-white rounded-md lg:w-1/3">
				<div className="flex justify-between items-center p-3 bg-green300 text-white text-xl font-medium rounded-t-md">
					<button onClick={onBack}
						className="text-white">
						<IoChevronBack size="24" />
					</button>
					<p className="tracking-wider">302</p>
					<p></p>
				</div>

				<div className="p-2">
					<Badge>起迄站</Badge>
					<p>萬華--關渡宮</p>
				</div>
				<div className="p-2">
					<Badge>收費方式</Badge>
					<p>萬華--關渡宮</p>
					<p>緩衝區</p>
					<p>士林-士林簡易庭</p>
				</div>
				<div className="p-2">
					<Badge>發車時間</Badge>
					<p>平日<br />
						06:00-23:00
					</p>
					<p>假日<br />
						07:00-23:00
					</p>
				</div>
				<div className="p-2">
					<Badge>發車間距</Badge>
					<p>平日<br />
						05:00-06:00 每15分一班<br />
						05:00-06:00 每15分一班<br />
						05:00-06:00 每15分一班
					</p>
					<p>假日<br />
						07:00-23:00 每30分一班<br />
						07:00-23:00 每30分一班<br />
						07:00-23:00 每30分一班
					</p>
				</div>
				<div className="p-2">
					<Badge>業者資訊</Badge>
					<p>
						臺北客運<br />
					</p>
				</div>
			</div>
		</>
	)
}

export default RouteInfoCard;