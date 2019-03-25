import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Add } from './components';

import './css-lib/index.min.css';

const Primary = () => (
  <div className="container row justify-center flex-align-center fh-v">
    <div className="col-md-3">
      <Button primary label="more" />
    </div>
    <div className="col-md-3">
      <Button primary label="more" style="rounded" />
    </div>
    <div className="col-md-3">
      <Button primary label="more" style="rounded-full" />
    </div>
  </div>
)

const Outline = () => (
  <div className="container row justify-center flex-align-center fh-v">
    <div className="col-md-3">
      <Button outline label="more" />
    </div>
    <div className="col-md-3">
      <Button outline label="more" style="rounded" />
    </div>
    <div className="col-md-3">
      <Button outline label="more" style="rounded-full" />
    </div>
  </div>
)

const Disabled = () => (
  <div className="container row justify-center flex-align-center fh-v">
    <div className="col-md-3">
      <Button disabled primary label="more" />
    </div>
    <div className="col-md-3">
      <Button disabled outline label="more" style="rounded" />
    </div>
    <div className="col-md-3">
      <Button disabled primary label="more" style="rounded-full" />
    </div>
  </div>
)

const Icon = () => (
  <div className="container row justify-center flex-align-center fh-v">
    <div className="col-md-3">
      <Button icon={<Add />} primary label="more" />
    </div>
    <div className="col-md-3">
      <Button icon={<Add />} disabled outline label="more" style="rounded" />
    </div>
    <div className="col-md-3">
      <Button icon={<Add />} outline label="more" style="rounded-full" />
    </div>
  </div>
)

const Plain = () => (
  <div className="container row justify-center flex-align-center fh-v">
    <div className="col-md-3">
      <Button icon={<Add />} plain label="more" />
    </div>
    <div className="col-md-3">
      <Button disabled plain label="more" style="rounded" />
    </div>
    <div className="col-md-3">
      <Button plain label="more" style="rounded-full" />
    </div>
  </div>
)

storiesOf('Button', module)
  .add('primary', () => (<Primary />))
  .add('outline', () => (<Outline /> ))
  .add('disabled', () => (<Disabled />))
  .add('icon', () => (<Icon />))
  .add('plain', () => (<Plain />))
