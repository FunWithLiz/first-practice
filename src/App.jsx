import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Recipe from './Recipe';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

      recipe: {
        title: 'Chicken Masala',
        author: 'Elizabeth',
        ingredients: [
          '6 garlic, ',
          '4 teaspoon ginger, ',
          '4 teaspoon tumeric, ',
          '2 teaspoon masala'
        ],
        preparation: 'Mix everything together',
        prepTime: '20 mins total',
        servings: 6,
        img: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Chicken_Tikka_Masala_Curry.png',
          captions: 'Delicious Chicken Tikka Masala'
        }
      }
    }

  }




  render() {
    return (
      <div className="App">
        <Header />

        <Recipe
          recipe = {this.state.recipe}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
