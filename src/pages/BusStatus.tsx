import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusList from "@/components/StatusList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { IoCaretBack, IoCode, IoHeart } from "react-icons/io5";
import { MdAutorenew } from "react-icons/md";

const BusStatus = () => {
	const [favorite, setFavorite] = useState(true);
	const [openMap, setOpenMap] = useState(false);

	return (
		<>
			<Navbar />

			{/* Mobile & Tablet */}
			<div className="lg:hidden">
				<div className={`bg-yellow-100 transition-all duration-500 ease-in-out overflow-hidden ${openMap ? 'h-64' : 'h-0'}`}>
					我是地圖
				</div>

				<div className='flex justify-between items-center text-gray-dark p-3'>
					<IoCaretBack size={24} />
					<button onClick={() => setOpenMap(!openMap)}
						className='px-4 py-2 border rounded-full text-sm'>
						{openMap ? `隱藏` : `顯示`}地圖
					</button>
				</div>

				<div className='flex items-center justify-between px-6 md:px-10'>
					<div className='text-dark-blue'>
						<h2 className='english-font text-2xl font-semibold'>265區</h2>
						<p className='flex items-center my-2'>
							重慶國中
							<span className='mx-1 text-main-green'><IoCode /></span>
							行政院
						</p>
					</div>
					<button onClick={() => setFavorite(!favorite)}
						className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
						<IoHeart size={24} />
					</button>
				</div>

				<Tabs defaultValue="account" >
					<TabsList className="flex w-11/12 mx-auto my-3 bg-main-blue text-white font-medium">
						<TabsTrigger value="account" className="w-1/2 data-[state=active]:bg-[#bac2ff]/50">往 重慶國中</TabsTrigger>
						<TabsTrigger value="password" className="w-1/2 data-[state=active]:bg-[#bac2ff]/50">往 行政院</TabsTrigger>
					</TabsList>
					<TabsContent value="account">
						<StatusList />
					</TabsContent>
					<TabsContent value="password">
						<StatusList />
					</TabsContent>
				</Tabs>
			</div>

			{/* Desktop */}
			<div className="hidden lg:flex lg:h-screen lg:overflow-y-hidden">

				<div className="w-1/3 overflow-scroll">
					<div className='flex items-center justify-between p-6'>
						<div className='flex items-center'>
							<button className='text-gray-default hover:text-gray-dark'>
								<IoCaretBack size={24} />
							</button>
							<div className='text-dark-blue mx-4'>
								<h2 className='english-font text-2xl font-semibold'>265區</h2>
								<p className='flex items-center mt-2'>
									重慶國中
									<span className='mx-1 text-main-green'><IoCode /></span>
									行政院
								</p>
							</div>
						</div>

						<div className='text-gray-default'>
							<button className='mx-4 hover:text-gray-dark'>
								<MdAutorenew size={24} />
							</button>
							<button onClick={() => setFavorite(!favorite)}
								className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
								<IoHeart size={24} />
							</button>
						</div>
					</div>

					<Tabs defaultValue="outbound" >
						<TabsList className="flex w-11/12 mx-auto mb-3 bg-main-blue text-white font-medium">
							<TabsTrigger value="outbound" className="w-1/2 data-[state=active]:bg-[#bac2ff]/40 data-[state=active]:text-white">往 重慶國中</TabsTrigger>
							<TabsTrigger value="inbound" className="w-1/2 data-[state=active]:bg-[#bac2ff]/40 data-[state=active]:text-white">往 行政院</TabsTrigger>
						</TabsList>
						<TabsContent value="outbound">
							<StatusList />
						</TabsContent>
						<TabsContent value="inbound">
							<StatusList />
						</TabsContent>
					</Tabs>
					<StatusList />
				</div>

				<div className="w-2/3 h-full bg-yellow-100">
					我是地圖
				</div>
			</div>

			<Footer />
		</>
	)
}

export default BusStatus;