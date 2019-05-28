import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Checkbox } from './components';

import './css-lib/index.min.css';

const Primary = () => (
  <div>
    <div className="container row justify-center flex-align-center fh-v">
      <Checkbox />
    </div>

  </div>
);

storiesOf('Checkbox', module)
  .add('Primary', () => (<Primary />))
