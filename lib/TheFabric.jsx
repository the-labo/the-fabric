'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheFabricStyle from './TheFabricStyle'
import { htmlAttributesFor, eventHandlersFor, newId } from 'the-component-util'

/**
 * Canvas drawing of the-components
 */
class TheFabric extends React.Component {
  constructor (props) {
    super(props)
    const s = this
    s.canvasElm = null
    s.ticking = false
    s.canvasId = newId({prefix: 'the-fabric-canvas'})
    s.canvas = null
    s.drawCount = 0
  }

  render () {
    const s = this
    const {props, canvasId} = s
    const {
      className,
      children,
      width,
      height
    } = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-fabric', className)}
      >
        <canvas ref={(canvasElm) => { s.canvasElm = canvasElm }}
                id={canvasId}
                {...{width, height}}
        />
        {children}
      </div>
    )
  }

  componentDidMount () {
    const s = this

    const {fabric} = require('fabric')
    const canvas = new fabric.Canvas(s.canvasId)

    s.startTicking(() => {
      s.doDraw({fabric, canvas})
    })
  }

  componentWillUnmount () {
    const s = this
    s.stopTicking()
  }

  doDraw ({fabric, canvas}) {
    const s = this
    const {draw} = s.props
    const {drawCount} = s
    draw({fabric, canvas, count: drawCount})
    s.drawCount += 1
  }

  startTicking (callback) {
    const s = this
    s.ticking = true
    const tick = () => {
      if (!s.ticking) {
        return
      }
      callback.call(s)
      requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }

  stopTicking () {
    const s = this
    s.ticking = false

  }
}

TheFabric.Style = TheFabricStyle

TheFabric.propTypes = {
  /** Draw handler */
  draw: PropTypes.func.isRequired,
  /** Canvas width */
  width: PropTypes.number,
  /** Canvas height */
  height: PropTypes.number
}

TheFabric.defaultProps = {
  draw: () => null,
  width: 300,
  height: 300
}

TheFabric.displayName = 'TheFabric'

export default TheFabric
