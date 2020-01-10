import React from 'react';
import './App.css';
import Client from './components/Client';

class App extends React.Component {
	state = {
		clients: [ { id: 1, nom: 'Lior chamla' }, { id: 2, nom: 'Magali Pernin' }, { id: 3, nom: 'Joseph Durand' } ],
		nouveauClient: ''
	};
	//Rappel: arrow function pour garder le bon this
	handleDelete = (id) => {
		const clients = [ ...this.state.clients ];
		const index = clients.findIndex(client => client.id === id);
		clients.splice(index, 1);
		this.setState({ clients });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const id = new Date().getTime();
		const nom = this.state.nouveauClient;

		// const clients = this.state.clients.slice();
		const clients = [ ...this.state.clients ];
		clients.push({ id, nom });

		this.setState({ clients, nouveauClient: '' });
	};
	handleChange = (e) => {
		this.setState({ nouveauClient: e.currentTarget.value });
	};
	render() {
		const title = 'Liste des clients';
		return (
			<div>
				<h1>{title}</h1>
				<ul>
					{this.state.clients.map((client) => (
						<Client details={client} onDelete={this.handleDelete}/>
					))}
				</ul>
				<form onSubmit={this.handleSubmit}>
					<input
						value={this.state.nouveauClient}
						onChange={this.handleChange}
						type="text"
						placeholder="Ajouter un client"
					/>
					<button>Confirmer</button>
				</form>
			</div>
		);
	}
}
export default App;
