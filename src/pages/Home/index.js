import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';

class Home extends Component {
	render () {
		return (
			<Aux>
				<Header />
				<MainSection />
			</Aux>
		)
	}
}

export default Home