import React from 'react'
import { Link } from 'react-router-dom'

const SuggestionsList = (props) => {
	const options = props.results.map(r => (
		<li key={r.id} onClick={props.onClick}>
			<Link to={`/repositories/${r.owner.login}/${r.name}`}>{r.name}</Link>
		</li>
	))

	return <ul className='autosuggestion-list'>{options}</ul>
}

export default SuggestionsList
