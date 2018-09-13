import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Header from '../../components/Header'
import API from '../../api'

import './style.css'

class User extends Component {
  constructor (props) {
		super(props)
		
		this.state = {
			user: {}
		}
	}

	getUserDetails (username) {
		API.get(`/users/${username}`)
			.then(({data}) => {
				this.setState({
					user: data
				})
			})
	}	

	componentDidMount () {
		const { username } = this.props.match.params
	
		this.getUserDetails(username)
	}

	render () {
		if (Object.keys(this.state.user).length > 0) {
			return (
				<Aux>
					<Header />
					<div className='user-details-div'>
						<div className='user-image-div'>
							<img src={this.state.user.avatar_url} alt={this.state.user.login} />
						</div>
						<div className='user-details'>
							<h2>User Name</h2>
							<p>{this.state.user.login}</p>
							<h2>Github URL</h2>
							<p>{this.state.user.html_url}</p>
						</div>
					</div>
				</Aux>
			)
		} else {
			return <p>No issue found. Check for some other issue</p>
		}
	}
}

export default User


