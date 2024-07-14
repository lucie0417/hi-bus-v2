import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IoCode, IoHeart } from "react-icons/io5";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";



const MyFavorite = () => {
	const cities = ['台北市', '新北市', '桃園市', '台中市'];

	const [favorite, setFavorite] = useState(false);

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />

			<div className="px-5 py-2.5 flex bg-gray-background text-sm overflow-x-scroll md:px-20 md:py-5 lg:px-20">
				<p className="shrink-0 mr-2">
					共收藏
					<span className="text-main-blue english-font text-lg"> 20 </span>
					個路線
				</p>
				{cities.map((city) => (
					<Badge className="px-4 py-2 ml-1 bg-gray-background border border-main-blue text-main-blue font-normal shrink-0 hover:bg-main-blue hover:text-white">
						{city}
					</Badge>
				))}
			</div>

			{/* Mobile */}
			<main className="flex-grow md:hidden">
				<div className="px-5 pt-5">
					<h5 className="text-main-blue text-xs font-medium">台北市</h5>
					<ul className="divide-y divide-gray-light bg-white">
						<li className="flex justify-between items-center py-2">
							<div>
								<h6 className="font-english text-lg font-semibold">
									218
								</h6>
								<p className="flex items-center">
									新北投
									<span className='mx-1 text-main-green'><IoCode /></span>
									萬華
								</p>
							</div>
							<button onClick={() => setFavorite(!favorite)}
								className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
								<IoHeart size={22} />
							</button>
						</li>
						<li className="flex justify-between items-center py-2">
							<div>
								<h5 className="font-english text-lg font-semibold">
									218
								</h5>
								<p className="flex items-center">
									新北投
									<span className='mx-1 text-main-green'><IoCode /></span>
									萬華
								</p>
							</div>
							<button onClick={() => setFavorite(!favorite)}
								className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
								<IoHeart size={22} />
							</button>
						</li>
					</ul>
				</div>

				<div className="px-5 pt-3">
					<h5 className="text-main-blue text-xs font-medium">新北市</h5>
					<ul className="divide-y divide-gray-light bg-white">
						<li className="flex justify-between items-center py-2">
							<div>
								<h6 className="font-english text-lg font-semibold">
									218
								</h6>
								<p className="flex items-center">
									新北投
									<span className='mx-1 text-main-green'><IoCode /></span>
									萬華
								</p>
							</div>
							<button onClick={() => setFavorite(!favorite)}
								className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
								<IoHeart size={22} />
							</button>
						</li>
						<li className="flex justify-between items-center py-2">
							<div>
								<h5 className="font-english text-lg font-semibold">
									218
								</h5>
								<p className="flex items-center">
									新北投
									<span className='mx-1 text-main-green'><IoCode /></span>
									萬華
								</p>
							</div>
							<button onClick={() => setFavorite(!favorite)}
								className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
								<IoHeart size={22} />
							</button>
						</li>
					</ul>
				</div>

				<div className="px-5 pt-3">
					<h5 className="text-main-blue text-xs font-medium">新北市</h5>
					<ul className="divide-y divide-gray-light bg-white">
						<li className="flex justify-between items-center py-2">
							<div>
								<h6 className="font-english text-lg font-semibold">
									218
								</h6>
								<p className="flex items-center">
									新北投
									<span className='mx-1 text-main-green'><IoCode /></span>
									萬華
								</p>
							</div>
							<button onClick={() => setFavorite(!favorite)}
								className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
								<IoHeart size={22} />
							</button>
						</li>
						<li className="flex justify-between items-center py-2">
							<div>
								<h5 className="font-english text-lg font-semibold">
									218
								</h5>
								<p className="flex items-center">
									新北投
									<span className='mx-1 text-main-green'><IoCode /></span>
									萬華
								</p>
							</div>
							<button onClick={() => setFavorite(!favorite)}
								className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
								<IoHeart size={22} />
							</button>
						</li>
						<li className="flex justify-between items-center py-2">
							<div>
								<h5 className="font-english text-lg font-semibold">
									218
								</h5>
								<p className="flex items-center">
									新北投
									<span className='mx-1 text-main-green'><IoCode /></span>
									萬華
								</p>
							</div>
							<button onClick={() => setFavorite(!favorite)}
								className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
								<IoHeart size={22} />
							</button>
						</li>
					</ul>
				</div>
			</main>

			{/* Tablet & Desktop */}
			<main className="hidden md:flex flex-grow items-center justify-center bg-gray-background" >
				<div className="w-4/5 h-[1000px] bg-white rounded-xl lg:h-[560px]">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[200px]">公車路線</TableHead>
								<TableHead>起始站與終點站</TableHead>
								<TableHead>已收藏</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow className="px-5">
								<TableCell className="text-lg font-medium">218</TableCell>
								<TableCell className="flex items-center">
									新北投
									<span className='mx-1 text-main-green'><IoCode /></span>
									萬華
								</TableCell>
								<TableCell>
									<Badge className={`flex items-center py-1.5 w-[90px] hover:bg-main-green hover:text-white 
									${favorite ? 'bg-white text-main-green border border-main-green' : 'bg-main-green text-white'}`}
										onClick={() => setFavorite(!favorite)} >
										<IoHeart size={18} className="mr-1" />
										<p className="text-sm">已收藏</p>
									</Badge>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="text-lg font-medium">218</TableCell>
								<TableCell className="flex items-center">
									新北投
									<span className='mx-1 text-main-green'><IoCode /></span>
									萬華
								</TableCell>
								<TableCell>
									<Badge className={`flex items-center py-1.5 w-[90px] hover:bg-main-green hover:text-white 
									${favorite ? 'bg-white text-main-green border border-main-green' : 'bg-main-green text-white'}`}
										onClick={() => setFavorite(!favorite)} >
										<IoHeart size={18} className="mr-1" />
										<p className="text-sm">已收藏</p>
									</Badge>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</main>

			<Footer />
		</div>
	)
}

export default MyFavorite;
