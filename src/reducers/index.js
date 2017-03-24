import { combineReducers, createStore } from 'redux';
import pizzaReducer from './pizzaReducer'


export default combineReducers({
  selectedPizza: pizzaReducer
});
