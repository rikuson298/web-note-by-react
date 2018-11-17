import React from 'src/scripts/lib/React'
import {Context} from './Context'

export const useAppConsumer = () => {
  const {state, actionCreators} = React.useContext(Context)
  return {
    state,
    actionCreators,
  }
}