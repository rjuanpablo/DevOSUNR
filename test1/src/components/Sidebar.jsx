import { useState } from 'react';
import Container from './Container';
import { FaLink } from 'react-icons/fa';
import { links } from '../datos/links';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Sidebar = () => {
	const [ isOpen, setIsOpen ] = useState(true);

	const handleClick = (e) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	}

	return (
		<section className="w-12 h-screen bg-slate-300 sm:w-24">
			<Container isOpen={isOpen} >
				<div className="absolute w-[30px] h-[30px] rounded-full text-black right-0 bg-slate-400"> 
					{isOpen 
					? <button onClick={handleClick}><MdKeyboardArrowLeft size='28px' /></button> 
					: <button onClick={handleClick}><MdKeyboardArrowRight size='28px' /></button>
					} 
				</div>
				<div>
					<h1><p className="block sm:hidden"><FaLink /></p><p className="hidden sm:block">Links</p></h1>
					<ul>
						{links.map((link) => (
							<li key={link.id} className="flex align-middle">
								{link.icono}<a href={link.url} className="sm:"><p className="hidden sm:block">{link.text}</p></a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex-grow"></div>
				<div className="flex justify-center pb-4">
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
						Cerrar sesión
					</button>
				</div>
			</Container>
		</section>
	);
}

export default Sidebar;