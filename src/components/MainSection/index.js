import React, { Component } from 'react'

import './style.css'

class MainSection extends Component {
	render () {
		let resultsHtml = ''
		if(this.props.issues && this.props.issues.length) {
			resultsHtml = <table>
				<thead>
					<tr>
						<th></th>
						<th>Open Issues</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.issues.map((issue, index) => {
							return <tr key={`issue-${issue.id}`}>
								<td>{index + 1}2</td>
								<td>{issue.title}</td>
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