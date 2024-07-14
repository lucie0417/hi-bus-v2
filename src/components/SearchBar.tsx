// import { useState } from 'react';
import { useState } from 'react';
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
	const [favorite, setFavorite] = useState(false);

	const handleInput = (e: any) => {
		setRouteNumber(e.target.value);
		if (!isPanelOpen) setIsPanelOpen(true);
	}


	return (
		<>
			<div className="z-10 mx-auto my-6 md:my-8">
				<div className={`searchbox-container relative grid grid-cols-3 divide-x divide-gray-300 rounded-lg border border-main-blue md:py-1
				 ${matchRoute ? `border-b-slate-200` : `border-b-main-blue`}`}>

					<Select>
						<SelectTrigger className="w-full h-full border-none ring-offset-0 text-sm text-center focus:ring-0 focus:ring-offset-0">
							<SelectValue placeholder="請選擇縣市" />
						</SelectTrigger>
						<SelectContent className=''>
							{cityData.map((city: any) => (
								<SelectItem value={city.CityName} key={city.CityEngName}>
									{city.CityName}
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					<div className="relative flex col-span-2 rounded-r-lg">
						<input type="text" name="search" id="search"
							placeholder="搜尋公車路線"
							className="w-full text-nav-dark text-sm text-left pl-3 focus:outline-none"
							onFocus={handleInput}
							value={routeNumber}
						/>
						<button className="text-main-blue text-lg pr-3 md:pr-5">
							<IoSearch size={20} />
						</button>
					</div>
				</div>

				{isPanelOpen && (
					<div className='z-10 absolute left-1/2 transform -translate-x-1/2 searchbox-container p-1 border border-main-blue bg-white rounded-lg shadow'>
						<Tabs defaultValue="favoriteRoutes">
							<TabsList className="flex my-1 font-medium">
								<TabsTrigger value="favoriteRoutes" className="w-1/2 data-[state=active]:bg-[#bac2ff]/50">最愛路線</TabsTrigger>
								<TabsTrigger value="buttonPanel" className="w-1/2 data-[state=active]:bg-[#bac2ff]/50">按鈕面板</TabsTrigger>
							</TabsList>
							<TabsContent value="favoriteRoutes">
								<ul className="px-3 divide-y divide-gray-light bg-white">
									<li className="flex justify-between items-center py-2">
										<div>
											<h6 className="font-english font-semibold">
												218
											</h6>
											<p className="flex items-center text-sm">
												新北投
												<span className='mx-1 text-main-green'><IoCode /></span>
												萬華
											</p>
										</div>
										<div className='grid justify-items-center gap-1'>
											<button onClick={() => setFavorite(!favorite)}
												className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
												<IoHeart size={22} />
											</button>
											<p className='text-xs text-gray-dark'>台北</p>
										</div>
									</li>
									<li className="flex justify-between items-center py-2">
										<div>
											<h6 className="font-english font-semibold">
												218
											</h6>
											<p className="flex items-center text-sm">
												新北投
												<span className='mx-1 text-main-green'><IoCode /></span>
												萬華
											</p>
										</div>
										<div className='grid justify-items-center gap-1'>
											<button onClick={() => setFavorite(!favorite)}
												className={`${favorite ? 'text-main-green' : 'text-gray-default'}`}>
												<IoHeart size={22} />
											</button>
											<p className='text-xs text-gray-dark'>台北</p>
										</div>
									</li>
								</ul>
							</TabsContent>

							<TabsContent value="buttonPanel">
								<div className='grid grid-cols-6 gap-1.5 p-2 rounded-lg md:gap-3'>
									{panelData.map((unit: string, idx: number) => (
										<button key={idx} className='text-sm px-1 py-2.5 border border-gray-dark rounded-full hover:bg-gray-100 md:text-lg md:p-2'>
											{unit}
										</button>
									))}
								</div>
							</TabsContent>
						</Tabs>
					</div>
				)}

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