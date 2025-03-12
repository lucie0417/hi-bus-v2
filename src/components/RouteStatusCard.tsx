import StatusList from "./StatusList";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IoChevronBack, IoChevronDown, IoInformationCircle, IoLogoSnapchat } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import RouteInfoCard from '../components/RouteInfoCard';

const RouteStatusCard = () => {
	const [toggleStatusCard, setToggleStatusCard] = useState(true);
	const [infoCardOpen, setInfoCardOpen] = useState(false);


	return (
		<>
			<div className="absolute top-3 right-3 rounded-md">
				<Drawer open={toggleStatusCard} onOpenChange={setToggleStatusCard}>
					{!toggleStatusCard && (
						<DrawerTrigger asChild className="lg:hidden">
							<Button variant="outline">開啟公車動態</Button>
						</DrawerTrigger>
					)}

					<DrawerContent className="lg:hidden">
						<div className="mx-auto w-full">
							<div className="flex justify-between items-center p-4 bg-green300 text-white text-xl font-medium rounded-t-md">
								<button className="text-white" onClick={() => setInfoCardOpen(false)}>
									{infoCardOpen ? <IoChevronBack /> : <IoChevronDown />}
								</button>

								<p className="tracking-wider">302</p>
								{infoCardOpen ? (<IoLogoSnapchat className="opacity-0" size="24" />) : (<button onClick={() => setInfoCardOpen(true)}
									className="text-white">
									<IoInformationCircle size="24" />
								</button>)}
							</div>

							{!infoCardOpen && (
								<>
									<Tabs defaultValue="outbound">
										<TabsList className="grid w-full grid-cols-2 bg-green200 divide-x divide-white">
											<TabsTrigger value="outbound" className="text-white data-[state=active]:text-green500">往 萬華</TabsTrigger>
											<TabsTrigger value="inbound" className="text-white data-[state=active]:text-green500">往 關渡宮</TabsTrigger>
										</TabsList>
									</Tabs>

									<div className="h-1 bg-green400/60"></div>
								</>
							)}

							{infoCardOpen ? <RouteInfoCard /> : <StatusList />}
						</div>
					</DrawerContent>
				</Drawer>
			</div>
		</>
	)
}
export default RouteStatusCard;