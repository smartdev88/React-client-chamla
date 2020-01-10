import React from 'react';
import './App.css';

class App extends React.Component {

  clientInput = React.createRef();

	state = {
		clients: [ { id: 1, nom: 'Lior chamla' }, { id: 2, nom: 'Magali Pernin' }, { id: 3, nom: 'Joseph Durand' } ]
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
    e.preventDefault(); //empêcher la page à se recharger
    console.log("Ca marche");
    console.log(this.clientInput);
    
  //pour récupérer la valeur de l'input
    console.log(this.clientInput.current.value);
    
  }
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
          <input ref={this.clientInput} type="text" placeholder="Ajouter un client"/>
          <button>Confirmer</button>
        </form>
			</div>
		);
	}
}
export default App;
