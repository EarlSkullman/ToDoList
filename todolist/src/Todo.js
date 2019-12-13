/*
Todo.js doit contenir un bouton pour valider le Todo, qui apparait alors barré.
--> Déclare si le todo est accompli
*/

import React from 'react';
import { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="todoMain">
        <div className="header">
          <form>
          	
            <button type="submit"> Valider le ToDo </button>
          </form>
        </div>
      </div>
    )
  }
}
export default Todo