import { useState } from 'react';
import Container from './Container';
import { FaLink } from 'react-icons/fa';
import { links } from '../datos/links';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';

const Sidebar = () => {
	const [ isOpen, setIsOpen ] = useState(true);

	const handleClick = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	}

	return (
		<section className="w-12 h-screen bg-slate-300 ">
			<Container isOpen={isOpen} >
				<div className="absolute w-[30px] h-[30px] rounded-full text-black right-0 bg-slate-400 translate-x-1/2 mt-10"> 
					{isOpen 
					? <button onClick={handleClick}><MdKeyboardArrowLeft size='28px' /></button> 
					: <button onClick={handleClick}><MdKeyboardArrowRight size='28px' /></button>
					} 
				</div>
				<div className='h-28'>haeader</div>
				<div>
					<ul className='flex flex-col gap-2'>
						{links.map((link) => (
							<li key={link.id} className={`flex items-center ${!isOpen ? 'justify-center' : 'ml-5'}`}>
								<span className='mr-1'>{link.icono}</span><a href={link.url} className="sm:">{isOpen && <span className='md:block'>{link.text}</span>}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex-grow"></div>
				<div className="flex justify-center pb-4">
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded flex justify-center items-center">
						<span><BiLogOut size={22}/></span>
						{isOpen && <span className=' md:block'>Cerrar sesión</span>}
					</button>
				</div>
			</Container>
		</section>
	);
}

export default Sidebar;