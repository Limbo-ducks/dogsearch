import React from 'react';
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';

function Nav({ authenticated }) {
  return (
	<nav>
		<ul>
			<Link to='/'>
				<li>Home</li>
			</Link>
			<Link to='/about'>
				<li>About</li>
			</Link>
			{authenticated && <Link to='/profile'>
				<li>profile</li>
			</Link>}
		</ul>
		<SearchBar />
	</nav>
  );
}

export default Nav;