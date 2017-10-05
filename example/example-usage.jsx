'use strict'

import React from 'react'
import { TheFabric, TheFabricStyle } from 'the-fabric'

class ExampleComponent extends React.Component {
  constructor (props) {
    super(props)
    const s = this
    s.vx01 = 1
  }

  render () {
    const s = this
    return (
      <div>
        <TheFabricStyle/>
        <TheFabric draw={({fabric, canvas, count}) => {

          // Initialize on count 0
          if (count === 0) {
            canvas.set({'backgroundColor': 'white'})

            s.rect01 = new fabric.Rect({
              left: 150,
              top: 150,
              fill: 'red',
              width: 20,
              height: 20
            })
            canvas.add(s.rect01)

          }

          {
            const {left} = s.rect01
            const vx = s.vx01
            const needsTurn = (vx > 0 && left > 200) || (vx < 0 && left < 100)
            if (needsTurn) {
              s.vx01 *= -1
            }
            s.rect01.set({left: left + s.vx01})
          }
          canvas.renderAll()
        }}>
        </TheFabric>
      </div>

    )
  }
}

export default ExampleComponent
