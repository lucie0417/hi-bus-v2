import StatusList from "./StatusList";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoChevronBack, IoInformationCircle } from "react-icons/io5";

type RouteStatusCardProps = {
	onInfoClick?: () => void;
};

const RouteStatusCard = ({ onInfoClick }: RouteStatusCardProps) => {
	return (
		<>
			<div className="absolute top-4 left-4 w-1/2 bg-white rounded-md lg:w-1/3">
				<div className="flex justify-between items-center p-3 bg-green300 text-white text-xl font-medium rounded-t-md">
					<button
						className="text-white">
						<IoChevronBack size="24" />
					</button>
					<p className="tracking-wider">302</p>
					<button onClick={onInfoClick}
						className="text-white">
						<IoInformationCircle size="24" />
					</button>
				</div>
				<Tabs defaultValue="outbound">
					<TabsList className="grid w-full grid-cols-2 bg-green200 divide-x divide-white">
						<TabsTrigger value="outbound" className="text-white data-[state=active]:text-green500">往 萬華</TabsTrigger>
						<TabsTrigger value="inbound" className="text-white data-[state=active]:text-green500">往 關渡宮</TabsTrigger>
					</TabsList>
				</Tabs>

				<div className="h-1 bg-green400/60"></div>

				<StatusList />
			</div>
		</>
	)
}
export default RouteStatusCard;