import React, { Component } from 'react'
import SuggestionsList from '../SuggestionsList'
import API from '../../api'

import './style.css'

class SearchRespositoryInput extends Component {
	state = {
		results: [],
		query: ''
	}

	handleChangeEvent = event => {
		this.setState({
			query: this.search.value
		}, () => {
			if (this.state.query && this.state.query.length > 2) {
				this.getRepos()
			} else {
				this.setState({
					results: []
				})
			}
		})
	}

	getRepos () {
		API.get(`search/repositories?q=${this.state.query}&sort=stars&order=desc&in:name`)
			.then(({data}) => {
				this.setState({
					results: data.items
				})
			})
	}

	changeInputValue = () => {
		this.setState({
			results: []
		})
	}

	render () {
		return (
			<div className='autocomplete'>
				<input className='issue-search-input' type='text' 
					placeholder='Seach repository here'
					ref={input => this.search = input} 
					onChange={this.handleChangeEvent}
					value={this.state.query} />
				<div className='autosuggestion-div'>
					<SuggestionsList 
						results={this.state.results}
						onClick={this.changeInputValue} />
				</div>
			</div>
		)
	}
}

export default SearchRespositoryInput