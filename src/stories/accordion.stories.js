import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Accordion, Heading, Button } from './components';

import './css-lib/index.min.css';

class Primary extends React.Component {
  render() {
    return (
      <Accordion>
        <div label="test">test</div>
        <div label="test1">teasdfst</div>
        <div label="test2">teasdsafasdfasdfst</div>
      </Accordion>
    );
  }
}

storiesOf('Accordion', module)
  .add('primary', () => (<Primary />))
