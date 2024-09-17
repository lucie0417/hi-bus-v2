// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import routeData from '../data/route.json';
import cityData from '../data/cityDistrict.json';
import { IoSearch, IoCode, IoHeart } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"


const SearchBar = () => {
	const panelData: string[] = ['紅', '綠', '橘', '藍', '棕', '黃', 'F', 'R', 'T', '幹線', '先導', '內科', '貓空', '市民', '南軟', '跳蛙', '夜間', '小'];
	const matchRoute = false;
	const [routeNumber, setRouteNumber] = useState('');
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	useEffect(() => {
		console.log('useEffect routeNumber', routeNumber);
	}, [routeNumber])

	const handleInput = (e: any) => {
		setRouteNumber(e.target.value);
		if (!isPanelOpen) setIsPanelOpen(true);
	}


	return (
		<>
			<div className="z-10 md:my-8">
				<div className="relative grid grid-cols-3 h-12 rounded-lg md:py-1">

					<Select>
						<SelectTrigger className="w-full h-full bg-gray-dark ring-offset-0 text-sm text-center text-gray-default border-none rounded-r-none focus:ring-0 focus:ring-offset-0">
							<SelectValue placeholder="請選擇縣市" />
						</SelectTrigger>
						<SelectContent>
							{cityData.map((city: any) => (
								<SelectItem value={city.CityName} key={city.CityEngName}>
									{city.CityName}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					<div className="relative flex col-span-2 bg-gray-dark rounded-r-lg">
						<input type="text" name="search" id="search"
							placeholder="搜尋公車路線"
							className="w-full bg-gray-dark text-gray-default text-sm text-left pl-3 focus:outline-none"
							onChange={handleInput}
							onFocus={() => setIsPanelOpen(true)}
							value={routeNumber}
						/>
						<button className="text-gray-default text-lg pr-3 md:pr-5">
							<IoSearch size={20} />
						</button>
					</div>


					{isPanelOpen && (
						<div className='z-10 absolute top-14 w-full p-1 bg-gray-dark rounded-lg drop-shadow-lg'>
							<Tabs defaultValue="favoriteRoutes">
								<TabsList className="flex my-1 font-medium bg-gray-dark text-gray-default border border-beige">
									<TabsTrigger value="favoriteRoutes" className="w-1/2 data-[state=active]:bg-beige">收藏路線</TabsTrigger>
									<TabsTrigger value="buttonPanel" className="w-1/2 data-[state=active]:bg-beige">按鈕面板</TabsTrigger>
								</TabsList>

								<TabsContent value="favoriteRoutes">
									<ul className="px-3 bg-gray-dark">
										<li className="flex justify-between items-center py-2">
											<div>
												<h6 className="font-english font-semibold text-main-yellow">
													218
												</h6>
												<p className="flex items-center text-sm">
													新北投
													<span className='mx-1 text-main-green'><IoCode /></span>
													萬華
												</p>
											</div>
											<div className='grid justify-items-center gap-1'>
												<button className='text-main-red'>
													<IoHeart size={22} />
												</button>
												<p className='text-xs text-gray-dark'>台北</p>
											</div>
										</li>
										<li className="flex justify-between items-center py-2">
											<div>
												<h6 className="font-english font-semibold text-main-yellow">
													218
												</h6>
												<p className="flex items-center text-sm">
													新北投
													<span className='mx-1 text-main-green'><IoCode /></span>
													萬華
												</p>
											</div>
											<div className='grid justify-items-center gap-1'>
												<button className='text-main-red'>
													<IoHeart size={22} />
												</button>
												<p className='text-xs text-gray-dark'>台北</p>
											</div>
										</li>
									</ul>
								</TabsContent>

								<TabsContent value="buttonPanel">
									<div className='grid grid-cols-6 gap-1.5 p-2 rounded-lg md:gap-3'>
										{panelData.map((unit: string) => (
											<button key={unit} value={unit} onClick={handleInput} className='text-sm px-1 py-2.5 border border-beige rounded-full hover:bg-beige hover:text-gray-dark md:text-lg md:p-2'>
												{unit}
											</button>
										))}
									</div>
								</TabsContent>
							</Tabs>
						</div>
					)}
				</div>
				{matchRoute && (
					<ul className='searchbox-container max-h-60 divide-y divide-slate-200'>
						{routeData.map((route: any) => (
							<Link to={`/${route.CityCode}/${route.SubRoutes[0].SubRouteName.Zh_tw}`}
								className='block' key={route.RouteUID}>
								<li className='p-3.5 text-lg'
									value={route.RouteUID} >
									{route.SubRoutes[0].SubRouteName.Zh_tw}
								</li>
							</Link>
						))}
					</ul>
				)}
			</div>
		</>
	)

}

export default SearchBar;