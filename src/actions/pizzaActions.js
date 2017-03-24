import actions from './actionTypes';

export function selectPizza (pizza) {
  console.log('you have pizza', pizza.name)
  return {
    type:actions.SELECT_PIZZA,
    payload:{
      pizza
    }
  }
}