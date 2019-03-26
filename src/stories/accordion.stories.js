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
        <div
          label={
            <Heading type={1} className="middle padding bg-tertiary primary">Panel 1</Heading>
          }
        >
          <Heading type={6} className="small padding nopb">sub title</Heading>
          <p className="padding nopt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Ste</p>
        </div>
        <div
          label={
            <Heading type={1} className="middle padding bg-tertiary primary">Panel 2</Heading>
          }
        >
          <Heading type={6} className="small padding nopb">sub title</Heading>
          <p className="padding nopt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Ste</p>
        </div>
        <div
          label={
            <Heading type={1} className="middle padding bg-tertiary primary">Panel 3</Heading>
          }
        >
          <Heading type={6} className="small padding nopb">sub title</Heading>
          <p className="padding nopt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Ste</p>
        </div>
      </Accordion>
    );
  }
}

class Toggle extends React.Component {
  render() {
    return (
      <Accordion toggle>
        <div
          label={
            <Heading type={1} className="middle padding bg-tertiary primary">Panel 1</Heading>
          }
        >
          <Heading type={6} className="small padding nopb">sub title</Heading>
          <p className="padding nopt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Ste</p>
        </div>
        <div
          label={
            <Heading type={1} className="middle padding bg-tertiary primary">Panel 2</Heading>
          }
        >
          <Heading type={6} className="small padding nopb">sub title</Heading>
          <p className="padding nopt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Ste</p>
        </div>
        <div
          label={
            <Heading type={1} className="middle padding bg-tertiary primary">Panel 3</Heading>
          }
        >
          <Heading type={6} className="small padding nopb">sub title</Heading>
          <p className="padding nopt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Ste</p>
        </div>
      </Accordion>
    );
  }
}

storiesOf('Accordion', module)
  .add('primary', () => (<Primary />))
  .add('toggle', () => (<Toggle />))
