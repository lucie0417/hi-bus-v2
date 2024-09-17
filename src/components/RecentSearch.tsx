import { IoBookmarkOutline } from "react-icons/io5";

const RecentSearch = () => {
	return (
		<li className='flex justify-between items-center text-sm py-3'>
			<p className='grid justify-items-start'>
				<span>老松國小</span>
				<span className='text-gray-default my-2'>行經公車路線：132, 133, 172, 173</span>
			</p>
			<button>
				{/* <IoBookmark size={20} fill='#EDBA55' /> */}
				<IoBookmarkOutline size={20} />
			</button>
		</li>
	)
}

export default RecentSearch;