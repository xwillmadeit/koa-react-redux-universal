import { INCREMENT, DECREMENT } from '../actions/constants'

export const homeReducer = (state = {
  title: 'what the fuck is the home page...',
  counter: 0
}, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload
      }
    default:
      return state
  }
}
