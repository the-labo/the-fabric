'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheFabric */
const TheFabricStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={c('the-fabric-style', className)}
            styles={TheFabricStyle.data(options)}
  />
)

TheFabricStyle.displayName = 'TheFabricStyle'
TheFabricStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheFabricStyle.defaultProps = {
  options: {}
}

TheFabricStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor
  } = options
  return asStyleData('.the-fabric', {
    '&': {}
  })
}

export default TheFabricStyle
