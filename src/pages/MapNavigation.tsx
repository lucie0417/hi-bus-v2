import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { LiaExchangeAltSolid, LiaEllipsisVSolid } from "react-icons/lia";
import { TbTriangleFilled, TbSquareFilled } from "react-icons/tb";

const MapNavigation = () => {
	return (
		<div className="w-full h-full bg-slate-600">
			<div className="px-6">
				<div className='relative flex justify-center items-center py-3'>
					<Link to="/" className='absolute left-0 top-1/2 transform -translate-y-1/2'>
						<IoArrowBack />
					</Link>
					<p className='text-center font-medium'>市區公車路線</p>
				</div>

				<div className='flex justify-between items-center '>
					<div className='grid gap-3 w-full'>
						<div className='flex items-center justify-center'>
							<TbSquareFilled size={18} fill='#EDBA55' />
							<input type="text" placeholder="我的位置" className='mx-3 w-full text-sm bg-transparent outline-none' />
						</div>
						<div className="flex items-center justify-between">
							<LiaEllipsisVSolid />
							<div className="w-full h-[1px] bg-beige mx-3"></div>
						</div>
						<div className='flex items-center justify-center'>
							<TbTriangleFilled size={18} fill='#EB7A77' />
							<input type="text" placeholder="搜尋目的地" className='mx-3 w-full text-sm bg-transparent outline-none' />
						</div>
					</div>
					<button className="flex justify-center items-center p-2 rotate-90 rounded-sm border border-beige text-beige bg-gray-dark hover:bg-main-yellow hover:text-gray-dark">
						<span><LiaExchangeAltSolid size={20} /></span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default MapNavigation;