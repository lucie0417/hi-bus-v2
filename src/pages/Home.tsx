import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NearStops from "@/components/NearStops";
import RouteInfoCard from "@/components/RouteInfoCard";
import { IoFlagOutline, IoBookmarkOutline } from "react-icons/io5";


const Home = () => {
	return (
		<div className='relative min-h-screen bg-black'>
			<div className='mx-6'>
				<Navbar />

				<SearchBar />

				<div className='flex'>
					<button className='flex w-1/2 h-10 mr-3 justify-center items-center border border-beige rounded-lg hover:bg-beige hover:text-gray-dark'>
						<IoFlagOutline />
						<span className='ml-1 text-sm'>市區公車路線</span>
					</button>

					<button className='flex w-1/2 h-10 justify-center items-center border border-beige rounded-lg hover:bg-beige hover:text-gray-dark'>
						<IoBookmarkOutline />
						<span className='ml-1 text-sm'>我的收藏</span>
					</button>
				</div>

				<NearStops />

				<div className='flex overflow-x-scroll'>
					<RouteInfoCard />
					<RouteInfoCard />
					<RouteInfoCard />
				</div>
			</div>


		</div >
	)
}

export default Home;