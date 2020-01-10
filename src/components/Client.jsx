import React, { Component } from 'react';
import App from '../App';

class Client extends Component {
	render() {
		return (
			<div>
				<li key={this.props.details.id}>
					{this.props.details.nom} <button onClick={() => this.props.onDelete(this.props.details.id)}>X</button>
				</li>
			</div>
		);
	}
}

export default Client;
// on doit passer la variable client qui existe dans App.js au composant Client.jsx, pour cela on utilise les props (des propriétés que l'on donne à un composant)