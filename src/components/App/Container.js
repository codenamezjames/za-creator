import React from 'react'
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import {selectedPizza} from '../../actions/pizzaActions'
import PizzaButton from './Container/PizzaButton';


let pizzaQuery = gql`query MyQuery { 
  pizzaSizes {
    name
    maxToppings
    toppings {
      defaultSelected
      topping {
        name
        price
      }
    }
    basePrice
  }
 }`;



@connect(store =>{
  return { selectedPizza:selectedPizza }
})
@graphql(pizzaQuery)
export default class Container extends React.Component {
  pickAPizza(){
    if(this.props.selectedPizza){
      return this.props.selectedPizza.name
    }
    return 'Please select a pizza'
  }
  render(){
    const pizzaSizes = this.props.data.pizzaSizes
    let pizzas
    if(pizzaSizes){
      pizzas = pizzaSizes.map(size => (<PizzaButton key={size.name} pizza={size} />))
    }
    
    return (
      <div className="container" style={{marginTop:'51px'}}>
        <div className="row">
          <div className="col-lg-12">
            <h1>Build Your Pizza!!</h1>
            {pizzas}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {this.pickAPizza()}
          </div>
        </div>
      </div>
    )
  }
}

