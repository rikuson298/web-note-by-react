import * as React from 'react'
import Button from 'src/scripts/shared/Button'

const counter:React.SFC<{}> = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      counter
      {count}
      <Button onClick={() => setCount(count + 1)}>
        +
      </Button>
    </div>
  )
}

export default counter