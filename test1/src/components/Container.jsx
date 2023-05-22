
const Container = ({isOpen, children}) => {

	return ( 
		<div className={`flex flex-col gap-2 min-h-screen relative bg-slate-300 transition-all ${isOpen ? 'w-48' : 'w-12'}`}>
			{children}
		</div>
	);
}

export default Container;