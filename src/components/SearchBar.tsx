import { useState } from 'react';
import { Link } from 'react-router-dom';
import routeData from '../data/route.json';
import cityData from '../data/cityDistrict.json';
import { IoSearch } from "react-icons/io5";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"



const SearchBar = () => {
	const panelData: string[] = ['紅', '綠', '橘', '藍', '棕', '黃', 'F', 'R', 'T', '幹線', '先導', '內科', '貓空', '市民', '南軟', '跳蛙', '夜間', '小'];
	const [matchRoute, setMatchRoute] = useState(false);
	const [openPanel, setOpenPanel] = useState(false);



	return (
		<>
			<div className="z-10 mx-auto divide-x my-6 md:my-8">
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

					<div className="flex col-span-2 rounded-r-lg">
						<input type="text" name="search" id="search"
							placeholder="搜尋公車路線"
							className="w-full text-nav-dark text-sm text-left pl-3 focus:outline-none"
						// onInput={e => setRouteNumber(e.target.value)}
						// value={routeNumber}
						/>
						<button className="text-main-blue text-lg pr-3 md:pr-5">
							<IoSearch size={20} />
						</button>
					</div>
				</div>

				{openPanel && (
					<div className='relative'>
						<div className='searchbox-container grid grid-cols-6 gap-1.5 p-3 border border-main-blue rounded-lg shadow
						md:grid-cols-9 md:gap-3 md:py-6'>
							{panelData.map((unit: string) => (
								<button className='text-sm p-1 border border-gray-dark rounded-full hover:bg-gray-light
								md:text-lg md:p-2'>
									{unit}
								</button>
							))}
						</div>
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