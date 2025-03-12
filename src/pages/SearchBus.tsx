import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RouteStatusCard from "@/components/RouteStatusCard";


const searchBus = () => {

	return (
		<>
			<Navbar />

			<div className="relative">
				<div className={`h-screen bg-brown100 transition-all duration-500 ease-in-out overflow-hidden`}>
					我是地圖
				</div>



				{/* <div className='flex justify-between items-center text-gray-dark p-3'>
					<IoCaretBack size={24} />
					<button onClick={() => setOpenMap(!openMap)}
						className='px-4 py-2 border rounded-full text-sm'>
						{openMap ? `隱藏` : `顯示`}地圖
					</button>
				</div> */}

				{/* <div className='flex items-center justify-between px-6 md:px-10'>
					<button onClick={() => setFavorite(!favorite)}
						className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
						<IoHeart size={24} />
					</button>
				</div> */}

				<RouteStatusCard />
			</div>

			<Footer />
		</>
	)
}

export default searchBus;