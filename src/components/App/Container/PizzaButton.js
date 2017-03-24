import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectPizza} from '../../../actions/pizzaActions'



@connect()
export default class PizzaButton extends Component {
  clickPizza() {
    this.props.dispatch( selectPizza(this.props.pizza ) )
  }
  render(){
    var {pizza} = this.props
    return (
      <div className="col-sm-6 col-md-4">
        <h3 style={{textTransform:"capitalize"}}>
          {pizza.name}
          {pizza.maxToppings || 'Unlimited'} 
          Topping Pizza
        </h3>
        <button 
          className="btn btn-primary" 
          onClick={ this.clickPizza.bind(this) }
        >starting at {pizza.basePrice}</button>
      </div>
    )
  }
}


