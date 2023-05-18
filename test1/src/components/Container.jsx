
const Container = ({isOpen, children}) => {

	return ( 
		<div className={`flex flex-col min-h-screen relative ${isOpen ? 'open' : 'hidden'}`}>
			{children}
		</div>
	);
}

export default Container;