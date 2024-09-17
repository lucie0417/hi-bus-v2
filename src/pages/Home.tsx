import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NearStops from "@/components/NearStops";
import RouteInfoCard from "@/components/RouteInfoCard";
import WeatherBox from "@/components/WeatherBox";


const Home = () => {
	return (
		<div className='relative min-h-screen bg-black '>
			<div className='mx-6 md:mx-10'>
				<Navbar />
				<WeatherBox />
				<SearchBar />

				<NearStops />

				<div className='flex overflow-x-scroll'>
					<RouteInfoCard />
					<RouteInfoCard />
					<RouteInfoCard />
					<RouteInfoCard />
					<RouteInfoCard />
					<RouteInfoCard />

				</div>
			</div>


		</div >
	)
}

export default Home;