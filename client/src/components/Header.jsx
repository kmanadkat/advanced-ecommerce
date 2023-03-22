import React from 'react';

const Header = () => {
	return (
		<div className='header'>
			<p>{import.meta.env.VITE_API}</p>
		</div>
	);
};

export default Header;
