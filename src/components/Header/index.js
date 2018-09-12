import React from 'react'
import SearchRepositoryInput from '../SearchRepositoryInput'

import './style.css'
import logo from '../../images/logo.png'

const Nav = (props) => {
	return (
		<header className='App-header'>
			<img src={logo} className='App-logo' alt='logo' />
			<h4 className='App-title'>Open Github Issues</h4>
			<SearchRepositoryInput inputValue={props.inputValue} />
		</header>
	)
}

export default Nav