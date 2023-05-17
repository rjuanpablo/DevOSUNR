import { FaBeer, FaLink } from 'react-icons/fa';

const Sidebar = () => {

	const links = [
		{
			id: 1,
			icono: <FaBeer />,
			text: 'inicio',
			url: '/link1',
		},
		{
			id: 2,
			icono: <FaBeer />,
			text: 'menu1',
			url: '/link2',
		},
		{
			id: 3,
			icono: <FaBeer />,
			text: 'menu2',
			url: '/link3',
		}
	]
	
	return ( 
		<section className="w-12 h-screen bg-slate-300 sm:w-24">
		    <div className="flex flex-col min-h-screen">
      <div>
        <h1><p class="block sm:hidden"><FaLink /></p><p class="hidden sm:block">Links</p></h1>
        <ul>
          {links.map((link) => (
            <li key={link.id} className="flex align-middle">
              {link.icono}<a href={link.url} className="sm:"><p class="hidden sm:block">{link.text}</p></a>
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
    </div>
		</section>
	);
}

export default Sidebar;