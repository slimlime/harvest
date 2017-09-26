import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Organism } from '.'

storiesOf('Organism', module)
  .add('default', () => (
    <Organism />
  ))
  .add('reverse', () => (
    <Organism reverse />
  ))
