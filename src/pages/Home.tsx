import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SearchCard from "@/components/SearchCard";
// import RouteStatusCard from "@/components/RouteStatusCard";
// import RouteInfoCard from "@/components/RouteInfoCard";
import WeatherBox from "@/components/WeatherBox";
import PositionNotify from "@/components/PositionNotify";
import Footer from "@/components/Footer";
import { FaRoad, FaBus } from "react-icons/fa6";
import { IoBicycleSharp, IoSettingsSharp } from "react-icons/io5";


type listItem = {
	title: string,
	icon: JSX.Element,
	route?: string,
}

const Home = () => {
	const navigate = useNavigate();
	const [openMap, setOpenMap] = useState(true);
	const [showInfoCard, setShowInfoCard] = useState(false);

	const list: listItem[] = [
		{ 'title': '找公車', icon: <FaBus size="52" />, route: '/searchBus' },
		{ 'title': '找客運', icon: <FaRoad size="52" /> },
		{ 'title': '找單車', icon: <IoBicycleSharp size="52" /> },
		{ 'title': '個人設定', icon: <IoSettingsSharp size="48" /> }
	];

	return (<>
		<Navbar />
		<div className='relative min-h-screen bg-green100 flex flex-col items-center'>
			<div className='mx-6 md:hidden'>
				<WeatherBox />

				<div className='grid grid-cols-2 gap-4'>
					{list.map((item, idx) => (
						<div key={idx}
							onClick={() => navigate(item.route)}
							className='grid justify-items-center content-center h-44 bg-white text-green400 rounded-md hover:bg-green100'>
							{item.icon}
							<p className="py-2 text-lg font-medium text-gray500">{item.title}</p>
						</div>
					))}
				</div>
				<PositionNotify />
			</div>

			<div className="hidden md:block md:w-full md:relative">
				<div className={`bg-brown100 transition-all duration-500 ease-in-out overflow-hidden ${openMap ? 'h-screen' : 'h-0'}`}>
					我是地圖
				</div>

				<SearchCard />
				{/* {showInfoCard ? (<RouteInfoCard onBack={()=>setShowInfoCard(false)}/>) : (<RouteStatusCard onInfoClick={() => setShowInfoCard(true)} />)} */}

			</div>

			<Footer />
		</div>
	</>
	)
}

export default Home;