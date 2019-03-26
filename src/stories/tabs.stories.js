import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Tabs, Heading, Button } from './components';

import './css-lib/index.min.css';

const Primary = () => (
  <div>
    <Tabs>
      <div label={<p>test 1</p>}>
        <Heading type={1}>Title 1</Heading>
        <p>My content in the first tab</p>
      </div>
      <div label=<p>test 2</p>>
        <Heading type={1}>Title 2</Heading>
        <p>My content in the second tab</p>
      </div>
      <div label=<p>test 3</p>>
        <Heading type={1}>Title 3</Heading>
        <p>My content in the third tab</p>
      </div>
    </Tabs>
  </div>
);

const WithButtons = () => (
  <div>
    <Tabs animation>
      <div label={<Button primary label="Tab 1" />}>
        <Heading type={1}>Title 1</Heading>
        <p>My content in the first tab</p>
      </div>
      <div label={<Button primary label="Tab 2" />}>
        <Heading type={1}>Title 2</Heading>
        <p>My content in the second tab</p>
      </div>
      <div label={<Button primary label="Tab 3" />}>
        <Heading type={1}>Title 3</Heading>
        <p>My content in the third tab</p>
      </div>
    </Tabs>
  </div>
);

storiesOf('Tabs', module)
  .add('primary', () => (<Primary />))
  .add('with buttons', () => (<WithButtons />))
