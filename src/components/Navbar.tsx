import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { IoGitBranch, IoLocationSharp, IoPerson } from "react-icons/io5";
import logo from '../assets/images/M-logo-white.svg';

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
		<div className='relative flex justify-between items-center h-16 bg-dark-blue'>
			<Link to={'/'}>
				<img src={logo} className='h-6 ml-6' alt="" />
			</Link>
			<FaBars size={24} className='text-white mr-6 md:hidden' onClick={() => setOpenMenu(!openMenu)} />

			<div className='text-white hidden md:flex md:mr-3'>
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
			</div>
		</div>

		{openMenu && (
			<div className='absolute right-0 z-10 w-full border-dotted border-t border-white md:hidden'>
				<ul className='bg-dark-blue text-white'>
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

		<div className='h-1.5 animate-navbar bg-gradient-to-r from-main-blue to-main-green bg-[length:200%_200%]'></div>
	</>
	)
}

export default Navbar;