import React, { Component } from 'react'
import { baseURL } from '../../api'
import { Link } from 'react-router-dom'
import './style.css'

class MainSection extends Component {
	render () {
		let resultsHtml = ''
		if(this.props.issues && this.props.issues.length > 0) {
			resultsHtml = <table className='issues-table'>
				<thead>
					<tr>
						<th></th>
						<th>Open Issues</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.issues.map((issue, index) => {
							const url = issue.url.split(baseURL)[1]
							return <tr className='issues-row' key={`issue-${issue.id}`} id={`issue-${issue.id}`}>
									<td>{issue.number}</td>
									<td><Link to={`/${url}`}>{issue.title}</Link></td>
								</tr>
						})
					}
				</tbody>
			</table>
		} else {
			resultsHtml = <p className="App-intro">
				There are no current open issues. Please look for a different repository in the search field.
			</p>
		}
		return (
			<main className='main-section'>
				<h2>Open Github Issues</h2>
				<hr />
				{resultsHtml}
			</main>
		)
	}
}

export default MainSection