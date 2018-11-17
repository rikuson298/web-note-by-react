import React from 'src/scripts/lib/React'
import {firestore} from 'src/scripts/lib/firebase/index.js'
import Button from 'src/scripts/shared/Button'

const counter:React.SFC<{}> = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      counter
      {count}
      <Button onClick={() => {
          setCount(count + 1)
          firestore.collection('count').add({
            count: count,
          })
        }
      }>
        +
      </Button>
    </div>
  )
}

export default counter