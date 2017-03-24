import actions from '../actions/actionTypes'

export default (state=null, action) => {

  console.log('returning action')
  if(action.type === actions.SELECT_PIZZA){
    return Object.assign({}, state, action.payload)
  }
  return Object.assign({}, state) 
}