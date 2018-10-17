import React, { Component } from 'react';
import Header from '../../components/Header'

import Aux from '../Aux';
import './style.css';

class Layout extends Component {
	render () {
		return (
			<Aux>
				<Header />
				<main className='Content'>
					{this.props.children}
				</main>
			</Aux>
		);
	}
}

export default Layout