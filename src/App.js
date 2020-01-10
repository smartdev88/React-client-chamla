import React from 'react';
import './App.css';

class App extends React.Component {

	state = {
    clients: [ { id: 1, nom: 'Lior chamla' }, { id: 2, nom: 'Magali Pernin' }, { id: 3, nom: 'Joseph Durand' } ],
    nouveauClient: ''
	};
	//Rappel: arrow function pour garder le bon this
	handleDelete = (id) => {
		console.log(id);
		const clients = this.state.clients.slice();
		const index = clients.findIndex(function(client) {
			return client.id === id;
		});
		clients.splice(index, 1);
		this.setState({ clients: clients });
	};
	handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    const client = {id: id, nom: nom};
    const clients = this.state.clients.slice();
    clients.push(client);

    this.setState({clients: clients, nouveauClient: ''})
  };
  handleChange = (e) => {
    // console.log(e.currentTarget.value);
    const value = e.currentTarget.value;
    this.setState({ nouveauClient: value });
	};
	render() {
		const title = 'Liste des clients';
		return (
			<div>
				<h1>{title}</h1>
				<ul>
					{this.state.clients.map((client) => (
						<li key={client.id}>
							{client.nom} <button onClick={() => this.handleDelete(client.id)}>X</button>
						</li>
					))}
				</ul>
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.nouveauClient} onChange={this.handleChange} type="text" placeholder="Ajouter un client" />
					<button>Confirmer</button>
				</form>
			</div>
		);
	}
}
export default App;
