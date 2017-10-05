/**
 * Test for TheFabric.
 * Runs with mocha.
 */
'use strict'

import TheFabric from '../lib/TheFabric'
import React from 'react'
import { ok, equal } from 'assert'
import { render } from 'the-script-test'

describe('the-fabric', () => {
  before(() => {
  })

  after(() => {
  })

  it('Render a component', () => {
    let element = render(
       <TheFabric />
    )
    ok(element)
  })
})

/* global describe, before, after, it */
