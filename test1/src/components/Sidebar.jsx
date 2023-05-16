
const links = [
	{
		id: 1,
		text: 'inicio',
		url: '/link1',
	},
	{
		id: 2,
		text: 'menu1',
		url: '/link2',
	},
	{
		id: 3,
		text: 'menu2',
		url: '/link3',
	}
]

const Sidebar = () => {

	
	return ( 
		<section className="w-2/5 bg-black">
		<div className="flex flex-space-between">
			<div>
			{links.map((link) => {
				<a key={link.id} href={link.url}>{link.text}</a>
			})
			}
			</div>
			<div>
				cerrar sesion
			</div>
		</div>
		</section>
	);
}

export default Sidebar;