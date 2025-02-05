import { useRef, useState } from "react";
import StatusList from "@/components/StatusList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { IoFunnel, IoSearch } from "react-icons/io5";
import city from "../data/cityList.json"

const SearchCard = () => {
	const [showCard, setShowCard] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	return (
		<>
			<div className="absolute top-4 left-4 w-1/2 bg-white rounded-md lg:w-1/3">
				<div className="flex justify-start items-center bg-green300 p-3 rounded-t-md">
					<Input type="text" className="w-2/3 mx-2 bg-green100 text-green400 placeholder-green400 font-normal" placeholder="搜尋公車路線或站牌" />
					<Button type="button" size="sm"
						className="mr-1 bg-white text-green400 focus:bg-green400 focus:text-white">
						<IoSearch />
						搜尋
					</Button>
					<Button type="button" size="sm" ref={buttonRef}
						className="bg-white text-green400 focus:bg-green400 focus:text-white"
						onClick={() => setShowCard(!showCard)}>
						<IoFunnel />
						篩選
					</Button>
				</div>

				{showCard && buttonRef.current && (
					<Card className="z-10 absolute"
						style={{
							top: buttonRef.current.offsetTop + buttonRef.current.offsetHeight + 4,
							left: buttonRef.current.offsetLeft,
							width: buttonRef.current.offsetWidth * 4.5,
						}}>
						<CardContent>
							<div className="grid grid-cols-4 p-2">
								{city.map((city: any) => (
									<Button variant="link" className="text-gray600 font-normal">{city.CityName}</Button>
								))}
							</div>
						</CardContent>
					</Card>
				)}

				<StatusList />
			</div>
		</>
	)
}

export default SearchCard;