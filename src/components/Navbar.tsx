import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline, IoGitBranch, IoLocationSharp, IoPerson } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import logo from '../assets/images/DaBus-logo-text.svg';

interface ListItem {
	icon: 'IoPerson' | 'IoGitBranch' | 'IoLocationSharp',
	title: string,
}

const icon = {
	IoPerson,
	IoGitBranch,
	IoLocationSharp,
}

const list: ListItem[] = [
	{
		icon: 'IoPerson',
		title: '會員登入'
	},
	{
		icon: 'IoGitBranch',
		title: '路線規劃'
	},
	{
		icon: 'IoLocationSharp',
		title: '附近站點'
	},
];


const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (<>
		<div className='relative flex items-center justify-between h-16 bg-black'>
			<IoReorderThreeOutline size={26} className='z-10 ml-4 md:hidden'
				onClick={() => setOpenMenu(!openMenu)} />
			<div className='absolute inset-x-0 flex justify-center'>
				<Link to={'/'}>
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className='mr-4'>
				<GoBell size={20} />
			</div>
		</div>

		{/* <div className='text-white hidden md:flex md:mr-3'>
			{list.map((item, idx) => {
				const IconComponent = icon[item.icon];
				return (
					<Link to={'/'}>
						<li key={idx} className='flex justify-center items-center p-2
						hover:text-main-yellow'>
							<IconComponent size={20} />
							<span className='ml-1'>{item.title}</span>
						</li>
					</Link>
				)
			})}
		</div> */}

		{openMenu && (
			<div className='absolute right-0 z-10 w-full border-dotted border-t border-white md:hidden'>
				<ul className='bg-black'>
					{list.map((item) => {
						const IconComponent = icon[item.icon];
						return (
							<li key={item.icon} className='flex justify-center items-center p-3 text-lg
						hover:text-main-yellow'>
								<IconComponent size={20} />
								<span className='ml-1'>{item.title}</span>
							</li>
						)
					})}
				</ul>
			</div>
		)}
	</>
	)
}

export default Navbar;