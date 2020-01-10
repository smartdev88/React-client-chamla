import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
	state = {
    clients: [ { id: 1, nom: 'Lior chamla' }, { id: 2, nom: 'Magali Pernin' }, { id: 3, nom: 'Joseph Durand' } ],
    compteur: 0
  };
  handleClick(){
    // alert("Bonjour à vous");
    // console.log(this); undefined this ne représente rien
    // //------------------
    // console.log(this.state);
    // this.setState({compteur: this.state.compteur + 1})
    // //------------------
    const clients = this.state.clients.slice();
    clients.push({id: 4, nom: "Anne Dupont"});
    this.setState({clients: clients})
  }
  handleClick2 = () => {
    console.log(this.state);
  }
	render() {
    const title = 'Liste des clients';
		// const elements = this.state.clients.map((client) => {
      // 	return (
        // 		<li>
        // 			{client.nom} <button>X</button>
        // 		</li>
        // 	);
        // });
        return (
          <div>
				<h1>{title}</h1>
        <p>{this.state.compteur}</p>
        <button onClick={this.handleClick.bind(this)}>Click me (S1: binding)</button>
        <button onClick={() => this.handleClick()}>Click me (S2: fonction fléchée)</button>
        <button onClick={this.handleClick2}>Click me (S3: fonction fléchée au niveau de la class)</button>
				<ul>
					{/* <li>
						Lior chamla <button>X</button>
					</li>
					<li>
						Magali Pernin <button>X</button>
					</li>
					<li>
						Joseph Durand <button>X</button>
					</li> */}
					{/* {elements} */}
          {this.state.clients.map(client => <li key={client.id}>{client.nom} <button>X</button></li>)}
				</ul>
			</div>
		);
	}
}
export default App;
