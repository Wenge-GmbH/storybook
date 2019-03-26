import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Heading } from './components';

import './css-lib/index.min.css';

const Primary = () => (
  <div className="container fh-v ">
    <Heading type={1} className="large">Title 1 large</Heading>
    <Heading type={1} className="middle">Title 1 middle</Heading>
    <Heading type={1} className="small">Title 1 small</Heading>

    <Heading type={2} className="large">Title 2 large</Heading>
    <Heading type={2} className="middle">Title 2 middle</Heading>
    <Heading type={2} className="small">Title 2 small</Heading>

    <Heading type={3} className="large">Title 3 large</Heading>
    <Heading type={3} className="middle">Title 3 middle</Heading>
    <Heading type={3} className="small">Title 3 small</Heading>

    <Heading type={4} className="large">Title 4 large</Heading>
    <Heading type={4} className="middle">Title 4 middle</Heading>
    <Heading type={4} className="small">Title 4 small</Heading>

    <Heading type={5} className="large">Title 5 large</Heading>
    <Heading type={5} className="middle">Title 5 middle</Heading>
    <Heading type={5} className="small">Title 5 small</Heading>

    <Heading type={6} className="large">Title 6 large</Heading>
    <Heading type={6} className="middle">Title 6 middle</Heading>
    <Heading type={6} className="small">Title 6 small</Heading>
  </div>
)

const Colored = () => (
  <div className="container fh-v ">
    <Heading type={3} className="middle primary">
      This is a colored heading text
    </Heading>
    <Heading type={3} className="middle secondary">
      This also
    </Heading>
    <Heading type={3} className="middle tertiary">
      And this
    </Heading>
  </div>
);

storiesOf('Heading', module)
  .add('all', () => (<Primary />))
  .add('colored', () => (<Colored />))
