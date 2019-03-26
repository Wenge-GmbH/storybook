import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Modalbox, Button, Trigger } from './components';

import './css-lib/index.min.css';

const Simple = () => (
  <div>
    <div id='test'>

    </div>
    <Modalbox domNode='test' trigger={<Button primary label="this is the trigger"/>}>
      Content to show
    </Modalbox>
  </div>
);

storiesOf('overlay', module)
  .add('simple', () => (<Simple />))
