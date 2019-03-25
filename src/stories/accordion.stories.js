import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Accordion, AccordionPanel, Heading, Button } from './components';

import './css-lib/index.min.css';

class Primary extends React.Component {
  render() {
    return (
      <div className="container-big">
        <Accordion header={<Heading type={3} size="middle">Accordion Headline</Heading>}>
          <AccordionPanel header={<Heading type={2} size="small">Panel Name</Heading>}>
          <div className="container-big">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <Button outline label="more" />
          </div>
          </AccordionPanel>
          <AccordionPanel header={<Heading type={2} size="small">Panel Name</Heading>}>
          <div className="container-big">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <Button outline label="more" />
          </div>
          </AccordionPanel>
        </Accordion>
      </div>
    );
  }
}

storiesOf('Accordion', module)
  .add('primary', () => (<Primary />))
