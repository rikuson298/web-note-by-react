export const initialState = {
  count: 0,
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
     return {...state, count: state.count - 1};
    default:
      return state;
  }
}

const increment = () => ({
  type: 'INCREMENT'
})

const decrement = () => ({
  type: 'DECREMENT'
})

export const actionCreators = {
  increment,
  decrement
}