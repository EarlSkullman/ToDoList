/*
App.js  charge des composants <Todo> pour chaque TODO, et un composant <Input> pour ajouter un nouveau TODO
*/


/*
Partie import
*/
import React from 'react';			// la base
import { Component } from 'react';	// pour les component
import './App.css'; 				// apparence
import Todo from './Todo';			// pour valider le todo
import Input from './Input';			// pour valider le todo

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = () => {
    console.log('Hello Add Item')
  }
  render() {
    return (
      <div className="App">
        <Input addItem={this.addItem} />
        
        <Todo addItem={this.addItem} />

      </div>
    )
  }
}
export default App