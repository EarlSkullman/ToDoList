/*
Input.js devra continir un champ de texte pour ajouter un nouveau Todo, et un bouton pour le valider.
Apres ajouter le champ de texte, le Todo est enregistre sur un gist github.com
*/

import React from 'react';
import { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div className="inputMain">
        <div className="header">
          <form>
            <input placeholder="Ajouter un nouveau ToDo ..." />
            <button type="submit"> Valider </button>
          </form>
        </div>
        <div>
        	<p>
        		Reste à faire :
        	</p>
        </div>
      </div>
    )
  }
}
export default Todo