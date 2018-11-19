interface ICounterState {
  count: number
}

interface IAction<A, P> {
  type: A
  payload: P
}

type IActionCreator<A, P> = (p: P) => {
  type: A
  payload?: P
}

type ActionTypes = 'INCREMENT' | 'DECREMENT'

export const initialState: ICounterState = {
  count: 0,
}

export const reducer = (state: ICounterState, action: IAction<ActionTypes, null>) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
     return {...state, count: state.count - 1};
    default:
      return state;
  }
}

const increment: IActionCreator<ActionTypes, undefined> = () => ({
  type: 'INCREMENT'
})

const decrement: IActionCreator<ActionTypes, undefined> = () => ({
  type: 'DECREMENT'
})

export const actionCreators = {
  increment,
  decrement
}