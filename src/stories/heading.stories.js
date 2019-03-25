import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Heading } from './components';

import './css-lib/index.min.css';

const Primary = () => (
  <div className="container fh-v ">
    <Heading type={1} size="large">Title 1 large</Heading>
    <Heading type={1} size="middle">Title 1 middle</Heading>
    <Heading type={1} size="small">Title 1 small</Heading>

    <Heading type={2} size="large">Title 2 large</Heading>
    <Heading type={2} size="middle">Title 2 middle</Heading>
    <Heading type={2} size="small">Title 2 small</Heading>

    <Heading type={3} size="large">Title 3 large</Heading>
    <Heading type={3} size="middle">Title 3 middle</Heading>
    <Heading type={3} size="small">Title 3 small</Heading>

    <Heading type={4} size="large">Title 4 large</Heading>
    <Heading type={4} size="middle">Title 4 middle</Heading>
    <Heading type={4} size="small">Title 4 small</Heading>

    <Heading type={5} size="large">Title 5 large</Heading>
    <Heading type={5} size="middle">Title 5 middle</Heading>
    <Heading type={5} size="small">Title 5 small</Heading>

    <Heading type={6} size="large">Title 6 large</Heading>
    <Heading type={6} size="middle">Title 6 middle</Heading>
    <Heading type={6} size="small">Title 6 small</Heading>
  </div>
)

const Colored = () => (
  <div className="container fh-v ">
    <Heading type={3} size="middle" color="primary">
      This is a colored heading text
    </Heading>
    <Heading type={3} size="middle" color="secondary">
      This also
    </Heading>
    <Heading type={3} size="middle" color="tertiary">
      And this
    </Heading>
  </div>
);

storiesOf('Heading', module)
  .add('all', () => (<Primary />))
  .add('colored', () => (<Colored />))
