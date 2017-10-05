/**
 * Test for TheFabricStyle.
 * Runs with mocha.
 */
'use strict'

import TheFabricStyle from '../lib/TheFabricStyle'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-fabric-style', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    const element = render(
      <TheFabricStyle/>
    )
    ok(element)
  })
})

/* global describe, before, after, it */
