import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRoad, FaBus, FaBars, FaBell } from "react-icons/fa6";
import { IoBicycleSharp, IoSettingsSharp, IoClose } from "react-icons/io5";
import logo from '../assets/images/DaBus-logo-text.svg';

type listItem = {
	title: string,
	icon: JSX.Element
}

const list: listItem[] = [
	{ 'title': '找公車', icon: <FaBus size="20" /> },
	{ 'title': '找客運', icon: <FaRoad size="20" /> },
	{ 'title': '找單車', icon: <IoBicycleSharp size="20" /> },
	{ 'title': '個人設定', icon: <IoSettingsSharp size="20" /> }
];


const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			<div className='relative flex items-center justify-between px-6 h-12 bg-white text-gray500 md:h-14 xl:h-16'>
				<FaBars size={22}
					className='z-10 md:hidden'
					onClick={() => setOpenMenu(!openMenu)} />

				<div className='absolute inset-x-0 flex justify-center md:hidden'>
					<Link to={'/'}>
						<img src={logo} alt="" />
					</Link>
				</div>

				<div className='md:hidden'>
					<FaBell size={20} />
				</div>

				{/* Tablet */}
				<div className='hidden w-full md:flex md:justify-between md:items-center'>
					<Link to={'/'}>
						<img src={logo} alt="" className='w-28' />
					</Link>

					<ul className='flex space-x-6'>
						{list.map((item, idx) => (
							<li key={idx}>
								<Link to={'/'} className='flex justify-center items-center py-3 text-lg hover:text-green400'>
									<p className='mr-1'>{item.title}</p>
									{item.icon}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>


			{openMenu && (
				<div className='absolute left-0 top-0 z-10 w-5/6 h-full bg-green200  text-green500 md:hidden'>
					<button onClick={() => setOpenMenu(!openMenu)}>
						<IoClose size={30} className='text-400 m-5' />
					</button>
					<ul className="flex flex-col divide-y-2 divide-green300 font-semibold px-8">
						{list.map((item, idx) => (
							<li key={idx} >
								<Link to={'/'} className='flex items-center py-4 text-lg hover:text-white'>
									{item.icon}
									<p className='ml-2'>{item.title}</p>
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	)
}

export default Navbar;