import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import './style.css' 
import MainSection from '../../components/MainSection';
import API from '../../api'

class Repository extends Component {
	constructor (props) {
		super(props)
		this.state = {
			issues: []
		}
	}

	getIssues (owner, repo) {
		API.get(`/repos/${owner}/${repo}/issues`)
			.then(({data}) => {
				this.setState({
					issues: data
				})
			})
	}

	componentWillReceiveProps (nextProps) {
		const { owner } = nextProps.match.params
		const { repo } = nextProps.match.params
		this.getIssues(owner, repo)
	}

	componentDidMount () {
		const { owner } = this.props.match.params
		const { repo } = this.props.match.params
		this.getIssues(owner, repo)
	}

	render () {
		return (
			<Aux>
				<MainSection issues={this.state.issues} />
			</Aux>
		)
	}
}

export default Repository