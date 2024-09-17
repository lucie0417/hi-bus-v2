import RecentSearch from "@/components/RecentSearch";
import { IoArrowBack, IoBookmark } from "react-icons/io5";
import { LiaExchangeAltSolid, LiaEllipsisVSolid } from "react-icons/lia";
import { TbTriangleFilled, TbSquareFilled } from "react-icons/tb";
import { Link } from "react-router-dom";


const Navigation = () => {
	return (
		<div className='bg-black w-full h-full px-6'>
			<div className='relative flex justify-center items-center py-3'>
				<Link to="/" className='absolute left-0 top-1/2 transform -translate-y-1/2'>
					<IoArrowBack />
				</Link>
				<p className='text-center font-medium'>市區公車路線</p>
			</div>

			<div className='flex justify-between items-center mt-3 mb-6'>
				<div className='grid gap-3 w-full'>
					<div className='flex items-center justify-center'>
						<TbSquareFilled size={18} fill='#EDBA55' />
						<input type="text" placeholder="我的位置" className='mx-3 w-full text-sm bg-black outline-none' />
					</div>
					<div className="flex items-center justify-between">
						<LiaEllipsisVSolid />
						<div className="w-full h-[1px] bg-beige mx-3"></div>
					</div>
					<div className='flex items-center justify-center'>
						<TbTriangleFilled size={18} fill='#EB7A77' />
						<input type="text" placeholder="搜尋目的地" className='mx-3 w-full text-sm bg-black outline-none' />
					</div>
				</div>
				<button className="flex justify-center items-center p-2 rotate-90 rounded-sm border border-beige text-beige bg-gray-dark hover:bg-main-yellow hover:text-gray-dark">
					<span><LiaExchangeAltSolid size={20} /></span>
				</button>
			</div>

			<Link to="/mapNavigation" className='flex justify-between items-center w-full p-3 my-3 bg-gray-dark rounded-lg text-sm'>
				<span className='flex items-center'>
					<IoBookmark size={20} fill='#EDBA55' />
					<span className='ml-2'>老松國小</span>
				</span>
				<span className='text-gray-default'>台北市</span>
			</Link>

			<button className='flex justify-between items-center w-full p-3 my-3 bg-gray-dark rounded-lg text-sm'>
				<span className='flex items-center'>
					<IoBookmark size={20} fill='#EDBA55' />
					<span className='ml-2'>老松國小</span>
				</span>
				<span className='text-gray-default'>台北市</span>
			</button>

			<div>
				<h6 className='font-medium mt-6'>搜尋紀錄</h6>
				<ul className='divide-y divide-beige'>
					<RecentSearch />
					<RecentSearch />
					<RecentSearch />
					<RecentSearch />
				</ul>
			</div>

		</div>
	)
}

export default Navigation;
