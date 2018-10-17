import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import API from '../../api'
import { Link } from 'react-router-dom'
import { baseURL } from '../../api'

import './style.css'

class Issue extends Component {
  constructor (props) {
		super(props)
		this.state = {
			issue: {},
			user: {}
		}
	}

	getIssueDetails (owner, repo, number) {
		API.get(`/repos/${owner}/${repo}/issues/${number}`)
			.then(({data}) => {
				this.setState({
					issue: data,
					user: data.user
				})
			})
	}	

	componentDidMount () {
		const { owner, repo, number } = this.props.match.params
	
		this.getIssueDetails(owner, repo, number)
	}

	render () {
		if (Object.keys(this.state.issue).length > 0 && Object.keys(this.state.user).length > 0) {
			const userURL = this.state.user.url.split(baseURL)[1]

			return (
				<Aux>
					<div className='issue-details-div'>
						<div className='user-image-div'>
							<Link to={`/${userURL}`}>
								<img src={this.state.user.avatar_url} alt={this.state.user.login} />
							</Link>
						</div>
						<div className='issue-details'>
							<h2>Title</h2>
							<p>{this.state.issue.title}</p>
							<h2>Description</h2>
							<p>{this.state.issue.body}</p>
						</div>
					</div>
				</Aux>
			)
		} else {
			return <p>No issue found. Check for some other issue</p>
		}
	}
}

export default Issue


